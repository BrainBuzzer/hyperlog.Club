/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { css } from '@emotion/core'
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div
        css={css`
          margin: 0 auto;
          padding: 0px 1.0875rem 1.45rem;
          padding-top: 0;
        `}
      >
        <main>{children}</main>
      </div>
      <footer css={css`
        bottom: 0;
        position: absolute;
        display: flex;
        width: 100%;
        height: 7vh;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 1rem;
        background-color: #3366ff;
        color: #fff;
      `}>
        © {new Date().getFullYear()}, Hyperlog
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
