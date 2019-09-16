import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { css } from '@emotion/core'
import Footer from "./footer"
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
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
