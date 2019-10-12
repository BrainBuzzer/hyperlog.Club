import React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Icon } from "antd"
import { isAuthenticated } from '../utils/auth'

const ImageBackground = styled(BackgroundImage)`
  background-repeat: repeat;
  background-size: inherit;
  height: 500px;
  z-index: 999;
`

const TextBox = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 calc((100vw-550px)/2) 2rem;
  width: 100%;

  .header-logo {
    padding: 2px;
    background: rgba(255,255,255,.9);
    font-size: 2.25rem;
  }

  .hero-text {
    max-width: 600px;
    margin-top: 20px;
    text-align: center;

    p {
      color: #fff;
      display: inline;
      padding: 0.1em;
      background: rgba(0,0,0,.5);
      font-size: 1.2rem;
    }
  }

  .hero-buttons {
    display: flex;
    flex-direction: row;
  }
`

const Button = styled(Link)`
  border-radius: 5px;
  color: #fff;
  display: block;
  font-size: 1.6em;
  margin: 1em auto;
  margin-left: 10px;
  padding: 0.4em;
  position: relative;
  transition: ease;
  background: rgba(0,0,0,0.75);

  &.join-button {
    border: 3px solid #fff;
    font-weight: 600;

    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        color: #000;
      }
    }
    
  }

  &.resource-button {
    border: 1px solid #fff;
    font-weight: 400;

    &:hover {
      font-weight: 600;
    }
  }

  &::after {
    height: 0;
    left: 0;
    top: 0;
    width: 100%;
  }

  &::before, &::after {
    background: #fff;
    content: '';
    position: absolute;
    z-index: -1;
  }

  &:hover {
    color: #3568ff;
    box-shadow: 0px 0px 20px 0px rgba(255,255,255,0.5);
    background-color: #fff; 
    transition: ease;

    &:after {
      height: 100%;
    }
  }
`

const Hero = () => {
  const { bgimage } = useStaticQuery(graphql`
  query {
    bgimage: file(relativePath:{eq: "hero-bg.png"}){
      childImageSharp{
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <ImageBackground Tag="section" fluid={bgimage.childImageSharp.fluid}>
      <TextBox>
        <div className="header-logo">h<span className="header-logo-letter-y">y</span>perlog<span className="header-logo-club">.Club</span></div>
        <div className="hero-text"><p>We&apos;re an open community of newbie programmers who learn to code together.</p></div>
        <div className="hero-buttons">
          {isAuthenticated && (
            <Button className="join-button"><Link to="/login"><Icon type="github" /> Login with Github</Link></Button>
          )}
          <Button className="resource-button">Learn More</Button>
        </div>
      </TextBox>
    </ImageBackground>
  );
}

export default Hero
