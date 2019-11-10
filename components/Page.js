import '../styles/index.scss'
import { withTranslation } from '../i18n'
import { shape, string } from 'prop-types'
import React, { useState } from 'react'
import {
  Button,
  Collapse,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Row
} from 'reactstrap'
import { FaSearch } from 'react-icons/fa'

const Page = ({ t, user, children }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Navbar color="light" light fixed="top" expand="md">
        <NavbarBrand href="/">Community Name</NavbarBrand>
        <Form>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button>
                <FaSearch />
              </Button>
            </InputGroupAddon>
            <Input placeholder={t('search')} />
          </InputGroup>
        </Form>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {user &&
              <>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {user.email}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a" href="/signout">
                      {t('sign-out')}
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            }
            {!user &&
            <>
              <NavItem>
                <NavLink href="/signin">{t('log-in')}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">{t('sign-up')}</NavLink>
              </NavItem>
            </>
            }
          </Nav>
        </Collapse>
      </Navbar>
      <Container className="main-container">
        <Row>
          {children}
        </Row>
      </Container>
    </>
  )
}

Page.propTypes = {
  user: shape({
    email: string
  })
}

export default withTranslation('common')(Page)
