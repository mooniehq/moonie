import { withTranslation } from '../i18n'
import { shape, string } from 'prop-types'
import React from 'react'
import AskQuestion from './AskQuestion'

const Page = ({ t, user, children }) => {

  return (
    <>
      <div className="ui top fixed menu">
        <div className="item">
          <a href="/">Community Name</a>
        </div>
        <div className="ui category search item">
          <div className="ui transparent icon input">
            <input className="prompt" type="text" placeholder={t('search')} />
            <i className="search link icon"></i>
          </div>
        </div>
        <div className="right menu">
          <div className="item">
            <AskQuestion />
          </div>
          {user &&
            <>
              <div className="ui simple dropdown item">
                <a>
                  <img className="ui avatar image" src="https://avatars0.githubusercontent.com/u/36872529?s=460&v=4"></img>
                </a>
                <i className="dropdown icon"></i>
                <div className="menu">
                  <a className="item" href="/signout">
                    {t('sign_out')}
                  </a>
                </div>
              </div>
            </>
          }
          {!user &&
          <>
            <div className="item">
              <a href="/signin">{t('log_in')}</a>
            </div>
            <div className="item">
              <a className="ui primary button" href="/signup">{t('sign_up')}</a>
            </div>
          </>
          }
        </div>
      </div>
      <div className="container mx-auto center-content">
        {children}
      </div>
    </>
  )
}

Page.propTypes = {
  user: shape({
    email: string
  })
}

export default withTranslation('common')(Page)
