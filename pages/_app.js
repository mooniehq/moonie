/**
 *  Magic file for next-i18next
 *
 */

import React from 'react'

import App from 'next/app'
import { appWithTranslation } from '../i18n'

import 'easymde/dist/easymde.min.css'
import '../semantic/dist/semantic.min.css'
import '../css/tailwind.css'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default appWithTranslation(MyApp)
