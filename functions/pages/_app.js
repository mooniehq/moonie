/**
 *  Magic file for next-i18next
 *
 */

import React from 'react'

import App, { Container } from 'next/app'
import { appWithTranslation } from '../i18n'

class MoonieApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default appWithTranslation(MoonieApp)
