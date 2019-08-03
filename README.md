# Moonie

## Local development

Root directory: `./functions`.

```
npm install && npm prune
npm run dev
```

Configuration in `.env`:
* `DB_USERNAME`
* `DB_PASSWORD`
* `DB_HOST`

VSCode settings (`/.vscode/settings.json`):
```
{
    "editor.tabSize": 2,
    "javascript.validate.enable": false
}
```

## Deploy

Root directory: `.`.

```
npm run build && npm run deploy
```

## References

https://nextjs.org/docs
http://www.passportjs.org/docs
https://www.npmjs.com/package/dotenv
https://sequelize.org/master