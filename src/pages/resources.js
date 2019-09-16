import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { navigate } from "gatsby"
import { Divider } from "antd"

const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Resources to learn programming" />
    <h1>Resources for starting out</h1>
    <div class="cards-list">
      <div class="card" onClick={() => { navigate("/resources/set-up-dev/") }}>
        <div class="card_image"><BgImg fluid={data.beginners.childImageSharp.fluid} /></div>
        <div class="card_title title-white">
          <p>Programming for complete beginners</p>
        </div>
      </div>
    </div>
    <Divider />
    <h1>Learn Programming Languages</h1>
    <div class="cards-list">
      <div class="card" onClick={() => { navigate("/resources/set-up-dev/") }}>
        <div class="card_image"><BgImg fluid={data.htmlcss.childImageSharp.fluid} /></div>
        <div class="card_title title-white">
          <p>HTML & CSS</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query {
  beginners: file(relativePath:{eq: "beginners.jpg"}){
    childImageSharp{
      fluid(duotone: { highlight: "#BB4090", shadow: "#192550" }, maxWidth: 500, maxHeight: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  htmlcss: file(relativePath:{eq: "htmlcss.jpg"}){
    childImageSharp{
      fluid(duotone: { highlight: "#BB4090", shadow: "#192550" }, maxWidth: 500, maxHeight: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
