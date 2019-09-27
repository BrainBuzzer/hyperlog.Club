import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Result, Button } from 'antd';
import { login, getProfile, logout } from "../utils/auth"

const windowGlobal = typeof window !== 'undefined' && window

class JoinPage extends React.Component {
  login = () => {
    login()
  }

  constructor() {
    super()
    this.state = {
      loggedIn: windowGlobal.localStorage.getItem("isLoggedIn"),
      user: getProfile()
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Join hyperlog.Club" />
        {
          !this.state.loggedIn && (
            <Button type="primary" shape="round" size="large" onClick={this.login.bind(this)}>
              Log In
            </Button>
          )
        }
        {
          this.state.loggedIn && (
            <Result
              status="success"
              title={`Congrats on joining the community, ${this.state.user.name}!`}
              subTitle="Details of joining our discord server will be mailed to you within 24 hours."
              extra={[
                <Button type="primary" key="console" onClick={e => { logout(); login() }}>
                  Add another user
                </Button>
              ]}
            />
          )
        }
      </Layout>
    )
  }
}

export default JoinPage
