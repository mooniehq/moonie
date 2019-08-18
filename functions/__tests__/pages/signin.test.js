import React from 'react'
import { render } from 'enzyme'

import SignIn from '../../pages/signin'

const { describe, it, expect } = global

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => Component => {
    Component.defaultProps = { ...Component.defaultProps, t: (text) => text }
    return Component
  }
}))

describe('Testing Sign In page', () => {
  it('Should contain Sign In text', () => {
    expect(render(<SignIn/>).text()).toContain('sign-in')
  })
})
