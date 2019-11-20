import React from "react"
import SEO from "../components/seo"
import Header from "../components/shared/header"
import Footer from "../components/shared/footer"
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

    .dark-mode & {
      color: #eee;
    }
  }
`

const Question = styled('div')`
  margin-top: 50px;

  h2 {
    color: #222;
    .dark-mode & {
      color: #eee;
    }
  }

  p {
    font-size: 1rem;

    .dark-mode & {
      color: #e5e5e5;
    }
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
          <h2>1. Who are we?</h2>
          <p>We are an open community for programmers from all levels of expertise who seek to learn to code and learn new technologies together.</p>
        </Question>
        <Question>
          <h2>2. How can I join the community?</h2>
          <p>You can join the community by <a href="/login">clicking here</a>. We have a Discord server for which, an invite link will be sent to your email. You will only need a GitHub account to join the community.</p>
        </Question>
        <Question>
          <h2>3. What do I get after joining the community?</h2>
          <p>For now, you get the access to people who will be helpful in any new programming challenge you take on. We are working on a platform to allow peer-programming so stay tuned for that!</p>
        </Question>
        <Question>
          <h2>4. Does it cost anything to join the community?</h2>
          <p>This community is open for anyone for completely free.</p>
        </Question>
        <Question>
          <h2>5. I want to contribute. How can I do it?</h2>
          <p>All of the code of hyperlog.Club is available for completely free of cost on <a href="https://github.com/BrainBuzzer/hyperlog.Club/">GitHub</a>. If you want to add any resources, or want to create any new tutorials, just follow the guideline on the GitHub Repository. We are actively looking for new contributors, so please feel free.</p>
        </Question>
      </QNA>
    </div>
    <Footer />
  </>
)

export default IndexPage
