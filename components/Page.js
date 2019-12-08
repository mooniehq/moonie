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
      <Navbar className="border-bottom bc-black-2" color="light" light fixed="top" expand="md">
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/">Community Name</NavbarBrand>
        <Form>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button size="sm">
                <FaSearch />
              </Button>
            </InputGroupAddon>
            <Input bsSize="sm" placeholder={t('search')} />
          </InputGroup>
        </Form>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {user &&
              <>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <img src="https://avatars0.githubusercontent.com/u/36872529?s=460&v=4" className="profile-picture rounded-circle"></img>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag="a" href="/signout">
                      {t('sign_out')}
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            }
            {!user &&
            <>
              <NavItem>
                <NavLink href="/signin">{t('log_in')}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">{t('sign_up')}</NavLink>
              </NavItem>
            </>
            }
          </Nav>
        </Collapse>
      </Navbar>
      <Container className="content">
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
