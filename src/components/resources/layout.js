import React from 'react'
import Sidebar from './sidebar'
import { Row, Col, Divider } from 'antd'
import SEO from '../seo'
import Header from '../header'

const Layout = ({ children, link, title, location }) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <Row>
        <Col span={6}>
          <Sidebar link={link} />
        </Col>
        <Col span={18}>
          <section class="content">
            <article class="markdown-section" id="main">
              <h1>{title}</h1>
              <Divider />
              <div dangerouslySetInnerHTML={{ __html: children}} />
            </article>
          </section>
        </Col>
      </Row>
    </>
  )
}

export default Layout
