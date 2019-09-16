import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Learn to code with community" />
    <Header />
    <div className="main-section">
      <Hero />
    </div>
    <Footer />
  </>
)

export default IndexPage
