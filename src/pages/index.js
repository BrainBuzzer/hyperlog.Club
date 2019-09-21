import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const QNA = styled('div')`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
  margin-top: 20px;

  .header-learn-more {
    text-align: center;
    font-weight: 600;
  }
`

const Question = styled('div')`
  margin-top: 50px;

  h1 {
    font-weight: 600;
  }

  p {
    font-size: 1rem;
  }
`

const IndexPage = () => (
  <>
    <SEO title="Learn to code with community" />
    <Header />
    <div className="main-section">
      <Hero />
      <QNA>
        <h1 className="header-learn-more">Learn About hyperlog.Club</h1>
        <Question>
          <h1>1. Who are we?</h1>
          <p>We are an open community for programmers from all levels of expertise who seek to learn to code and learn new technologies together.</p>
        </Question>
        <Question>
          <h1>2. How can I join the community?</h1>
          <p>You can join the community by <Link to="/join">clicking here</Link>. We have a Discord server for which, an invite link will be sent to your email. You will only need a Github account to join the community.</p>
        </Question>
        <Question>
          <h1>3. I want to contribute. How can I do it?</h1>
          <p>All of the code of hyperlog.Club is available for completely free of cost on Github. If you want to add any resources, or want to create any new tutorials, just follow the guideline on the Github Repositoy. We are actively looking for new contributors, so please feel free.</p>
        </Question>
      </QNA>
    </div>
    <Footer />
  </>
)

export default IndexPage
