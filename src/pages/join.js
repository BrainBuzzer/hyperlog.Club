import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "antd"
import { login, getProfile } from "../utils/auth"

class JoinPage extends React.Component {
  login = () => {
    login()
  }

  constructor() {
    super()
    this.state = {
      loggedIn: localStorage.getItem("isLoggedIn"),
      user: getProfile()
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Join hyperlog.Club" />
        {
          !this.state.loggedIn && (
            <Button onClick={this.login.bind(this)}>
              Log In
            </Button>
          )
        }
        {
          this.state.loggedIn && (
            <div>
              <h1>Congrats on joining the community, {this.state.user.name}!</h1>
              <p> Details of joining our discord server will be mailed to you within 24 hours.</p>
            </div>
          )
        }
      </Layout>
    )
  }
}

export default JoinPage
