import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Result, Button, Row, Col } from 'antd';
import { login, getProfile, isAuthenticated } from "../utils/auth"
import Lottie from 'react-lottie'
import animationData from '../../assets/animations/anim.json'

const InfoSection = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  width: 500px;
  margin: 0 auto;
  align-items: center;
`

const AnimSection = styled('div')`
  max-height: 500px;
`

class JoinPage extends React.Component {
  login = () => {
    login()
  }

  constructor() {
    super()
    this.state = {
      loggedIn: isAuthenticated(),
      user: getProfile()
    }
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return (
      <Layout>
        <SEO title="Join hyperlog.Club" />
        {
          !this.state.loggedIn && (
            <Row>
              <Col md={12} sm={24}>
                <InfoSection>
                  <h1>Join the community now!</h1>
                  <p>
                    Join our ever-growing community right now to get exclusive access to new stuff, and our very special discord server where you can meet new people who are just like you!
                  </p>
                  <p>
                    We are also working on something really special, so if you want updates for that, click below now!
                  </p>
                  <Button type="primary" shape="round" size="large" onClick={this.login.bind(this)}>
                    Join now!
                  </Button>
                </InfoSection>
              </Col>
              <Col md={12} sm={24}>
                <AnimSection>
                  <Lottie height={500} width={500} options={defaultOptions} />
                </AnimSection>
              </Col>
            </Row>
          )
        }
        {
          this.state.loggedIn && (
            <Result
              status="success"
              title={`Welcome, ${this.state.user.name}!`}
              subTitle="Welcome to the community! Check your e-mail, we have just mailed you the details of joining our Discord server!"
            />
          )
        }
      </Layout>
    )
  }
}

export default JoinPage
