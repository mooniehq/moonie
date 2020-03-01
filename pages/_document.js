import Document, { Html, Head, Main, NextScript } from 'next/document'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(
  () => {
    const jquery = require('jquery')
    window.jQuery = jquery
    window.$ = jquery
    require('../semantic/dist/semantic')
  },
  { ssr: false }
)

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <DynamicComponent />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
