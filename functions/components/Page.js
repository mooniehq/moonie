import '../styles/index.scss'
import { withTranslation } from '../i18n'
import { shape, string } from 'prop-types'
import React, { useState } from 'react'
import {
  Col,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row
} from 'reactstrap'

const Page = ({ t, user, children }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Community Name</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {user &&
              <>
                <NavItem>
                  <NavLink href="/ask">{t('create-question')}</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {user.email}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      {t('sign-out')}
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            }
            {!user &&
            <>
              <NavItem>
                <NavLink href="/signin/">{t('sign-in')}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">{t('sign-up')}</NavLink>
              </NavItem>
            </>
            }
          </Nav>
        </Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Page.propTypes = {
  user: shape({
    email: string
  })
}

export default withTranslation('common')(Page)
