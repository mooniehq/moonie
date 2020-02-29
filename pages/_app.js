/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-webpack-loader-syntax */
/**
 *  Magic file for next-i18next
 *
 */
import React from 'react'

import App from 'next/app'
import { appWithTranslation } from '../i18n'
import dynamic from 'next/dynamic'

import 'easymde/dist/easymde.min.css'
import '../semantic/dist/semantic.css'
import '../css/tailwind.css'


const DynamicComponentWithNoSSR = dynamic(
  () => {
    import('expose-loader?$!jquery')
    import('expose-loader?jQuery!jquery')
    import('../semantic/dist/semantic.js')
    return <></>
  },
  { ssr: false }
)

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <DynamicComponentWithNoSSR />
        <Component {...pageProps} />
      </>
    )
  }
}

export default appWithTranslation(MyApp)
