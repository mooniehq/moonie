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
                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle"></img>
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
