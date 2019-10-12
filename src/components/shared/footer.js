import React from "react"
import { css } from "@emotion/core"

const Footer = () => (
  <footer css={css`
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 1rem;
    background-color: #3366ff;
    color: #fff;
  `}>
    © {new Date().getFullYear()}, Hyperlog
  </footer>
)

export default Footer;