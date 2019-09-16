import React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 400px;
`

const TextBox = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 calc((100vw-550px)/2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #3366ff66;
    font-size: 2.25rem;
  }
`

const Hero = () => {
  const { bgimage } = useStaticQuery(graphql`
  query {
    bgimage: file(relativePath:{eq: "home-hero-bg.jpg"}){
      childImageSharp{
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    <ImageBackground Tag="section" fluid={bgimage.childImageSharp.fluid}>
      <TextBox>
        <h1>hyperlog.Club</h1>
      </TextBox>
    </ImageBackground>
  );
}

export default Hero
