import React from 'react'
import Sidebar from './sidebar'
import { Row, Col, Divider } from 'antd'
import SEO from '../seo'
import Header from '../header'
import css from '@emotion/css'

const Layout = ({ children, link, title, resource }) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <Row>
        <Col sm={24} md={6}>
          <Sidebar link={link} resource={resource} />
        </Col>
        <Col sm={24} md={18}>
          <main>
            <section css={css`
              position: relative;
              min-height: 500px;
              padding: 0 170px 144px 64px;
              overflow: hidden;
              background: #fff;
            `}>
              <article className="markdown-section" id="main">
                <h1>{title}</h1>
                <Divider />
                <div dangerouslySetInnerHTML={{ __html: children}} />
              </article>
            </section>
          </main>
        </Col>
      </Row>
    </>
  )
}

export default Layout
