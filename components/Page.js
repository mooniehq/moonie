import { withTranslation } from '../i18n'
import { shape, string } from 'prop-types'
import React, { useState } from 'react'

const Page = ({ t, user, children }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <div>
        <a href="#" onClick={toggle}>Toggle</a>
        <a href="/">Community Name</a>
        <form>
          <input type="text" placeholder={t('search')} />
        </form>
        <div>
          <div>
            {user &&
              <>
                <div>
                  <a href="#">
                    <img src="https://avatars0.githubusercontent.com/u/36872529?s=460&v=4"></img>
                  </a>
                  <div>
                    <a href="/signout">
                      {t('sign_out')}
                    </a>
                  </div>
                </div>
              </>
            }
            {!user &&
            <>
              <div>
                <a href="/signin">{t('log_in')}</a>
              </div>
              <div>
                <a href="/signup">{t('sign_up')}</a>
              </div>
            </>
            }
          </div>
        </div>
      </div>
      <div>
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
