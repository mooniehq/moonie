global.webpackDebugEnabled = true;

const autoprefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-cssnano');
const del = require('del');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const gutil = require('gulp-util');
const gzip = require('gulp-gzip');
const sass = require('gulp-sass');
const merge = require('merge-stream');
const sourcemaps = require('gulp-sourcemaps');
const spritesmith = require('gulp.spritesmith');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const shell = require('gulp-shell');
const terser = require('gulp-terser');
const through = require('through2');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

const removeOriginalFile = () => through.obj(function (file, enc, cb) {
  if (file.revOrigPath) {
    gutil.log(`Delete ${file.revOrigPath}`);
    del.sync(file.revOrigPath, {
      force: true,
    });
  }
  this.push(file);
  return cb();
});


gulp.task('clean', (cb) => {
  del.sync('dist');
  del.sync('../src/main/resources/static/**', {
    force: true,
  });
  cb();
});

gulp.task('js', shell.task([
  'webpack --no-color',
]));

gulp.task('lint', () => gulp.src(['**/*.jsx', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

gulp.task('html', () => gulp.src('src/index.html')
  .pipe(gulp.dest('dist')));

gulp.task('minifyJs', () => gulp.src('dist/index.js')
  .pipe(sourcemaps.init())
  .pipe(terser())
  .on('error', (err) => {
    gutil.log(gutil.colors.red('[Error]'), err.toString());
  })
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist')));

gulp.task('fonts', () => {
  const fonts = [
    'node_modules/bootstrap/fonts/**/*.*',
    'node_modules/lato-font/fonts/**/*.*',
    'node_modules/font-awesome/fonts/**/*.*',
  ];
  return gulp.src(fonts)
    .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('images', () => {
  const nospriteStream = gulp.src(['src/images/**/*.*'])
    .pipe(gulp.dest('dist/images'));
  const spriteData = gulp.src(['src/sprite_images/**/*.*'])
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      imgPath: '../images/sprite.png',
    }));
  const imgStream = spriteData.img
    .pipe(gulp.dest('dist/images/'));
  const cssStream = spriteData.css
    .pipe(gulp.dest('src/scss/'));
  return merge(imgStream, cssStream, nospriteStream);
});

gulp.task('vendorImages', () => gulp.src(['src/vendor/jquery-ui/images/**/*.*'])
  .pipe(gulp.dest('dist/images/')));

gulp.task('sass', () => gulp.src('src/scss/index.scss')
  .pipe(sass({ includePaths: ['src/scss', 'src/vendor/jquery-ui'] }).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest('dist')));

gulp.task('minifyCss', () => gulp.src('dist/index.css')
  .pipe(cssMinify())
  .pipe(gulp.dest('dist')));

gulp.task('rev', () => gulp.src(['dist/**', '!dist/index.html', '!dist/fonts/**'])
  .pipe(rev())
  .pipe(removeOriginalFile())
  .pipe(gulp.dest('dist'))
  .pipe(rev.manifest())
  .pipe(gulp.dest('dist')));

gulp.task('revreplace', () => gulp.src(['dist/index.html', 'dist/**.css', 'dist/**.js'])
  .pipe(revReplace({
    manifest: gulp.src('dist/rev-manifest.json'),
  }))
  .pipe(gulp.dest('dist')));

gulp.task('gzip', () => gulp.src('dist/**')
  .pipe(gzip())
  .pipe(gulp.dest('dist')));

gulp.task('deploy', () => gulp.src('dist/**', { base: 'dist' })
  .pipe(gulp.dest('../src/main/resources/static')));

gulp.task('watch', (cb) => {
  const watchJs = gulp.watch(['src/app/**'], gulp.series('lint'));
  const watchSass = gulp.watch(['src/scss/**', 'src/vendor/**'], gulp.series('sass'));
  const onChanged = (event) => {
    console.log(`File ${event.path} was ${event.type}. Running tasks...`);
  };
  watchJs.on('change', onChanged);
  watchSass.on('change', onChanged);
  cb();
});

gulp.task('serve', (cb) => {

  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, {
    contentBase: 'dist',
    hot: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    quiet: false,
    noInfo: false,
    lazy: false,
    watchOptions: {
      poll: false,
    },
    publicPath: '',
    https: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Accept-Encoding': '',
    },
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
        secure: false,
      },
    ],
    stats: {
      errors: true,
      errorDetails: true,
      colors: false,
      timings: true,
      chunks: true,
      chunkModules: false,
    },
    disableHostCheck: true,
  });
  server.listen(3001);
  cb();
});

gulp.task('common', (cb) => {
  gulp.series('clean', 'images', 'vendorImages', 'fonts', 'sass')(cb);
});

gulp.task('dev', (cb) => {
  global.webpackDebugEnabled = true;
  gulp.series('common', 'watch', 'serve')(cb);
});

gulp.task('devWithLint', (cb) => {
  global.webpackDebugEnabled = true;
  gulp.series('common', 'lint', 'watch', 'serve')(cb);
});

gulp.task('package', (cb) => {
  global.webpackDebugEnabled = false;
  gulp.series('common', 'js', 'minifyJs', 'minifyCss', 'rev', 'revreplace', 'gzip', 'deploy')(cb);
});
