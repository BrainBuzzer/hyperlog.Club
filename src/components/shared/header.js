import { Link, navigate } from "gatsby"
import React from "react"
import { Row, Col, Affix, Menu, Button, Icon } from "antd"
import { Location } from "@reach/router"
import UserContext from '../../context/UserContext'

const Header = () => (
  <Affix offsetTop={0}>
    <header className="header">
      <Row>
        <Col span={6}>
          <div className="header-logo" onClick={() => { navigate("/") }}>h<span className="header-logo-letter-y">y</span>perlog<span className="header-logo-club">.Club</span></div>
        </Col>
        <Col span={18}>
          <div style={{float: "right", marginRight: `1rem`}}>
            <Location>
              {({ location }) => {
                let key = location.pathname.includes('/resources') ? "/resources" : location.pathname
                return (
                    <Menu mode="horizontal" style={{ borderBottom: `none`}} selectedKeys={[key]}>
                      <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
                      <Menu.Item key="/resources"><Link to="/resources">Resources</Link></Menu.Item>
                      <Menu.Item key="/stat" className="join-menu" disabled style={{ cursor: `default` }}>
                          <UserContext.Consumer>
                            {({handleLogout, profile}) => (
                              (profile.name ? (
                                <Button type="ghost" shape="round" size="default" onClick={handleLogout}>
                                  Logout
                                </Button>
                              ) : (
                                <Button type="primary" shape="round" size="default">
                                  <Link to="/login"><Icon type="github" />Login</Link>
                                </Button>
                              ))
                            )}
                          </UserContext.Consumer>
                      </Menu.Item>
                    </Menu>
                )
              }}
            </Location>
          </div>
        </Col>
      </Row>
    </header>
  </Affix>
)

export default Header
