/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-webpack-loader-syntax */
/**
 *  Magic file for next-i18next
 *
 */
import React from 'react'

import App from 'next/app'
import { appWithTranslation } from '../i18n'

import '../css/tailwind.css'
import 'easymde/dist/easymde.min.css'
import '../semantic/dist/semantic.css'
import '../css/styles.css'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default appWithTranslation(MyApp)
