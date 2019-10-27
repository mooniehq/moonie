import '../../styles/index.scss'
import { withTranslation } from '../../i18n'
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
  Row
} from 'reactstrap'

const Page = ({ t, children }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Moonie</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/create-site">{t('create-site')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sites">{t('all-sites')}</NavLink>
            </NavItem>
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

// HOC for translation
// common is the namespace of the translation file
export default withTranslation('common')(Page)
