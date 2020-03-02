import { withTranslation } from '../i18n'
import { shape, string } from 'prop-types'
import React from 'react'

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
          {user &&
            <>
              <div className="ui simple dropdown item">
                <a href="#">
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
      <div className="pt-20">
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
