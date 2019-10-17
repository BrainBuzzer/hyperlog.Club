import React from 'react'
import Sidebar from './sidebar'
import { Row, Col, Divider, BackTop } from 'antd'
import SEO from '../seo'
import Header from '../shared/header'
import css from '@emotion/css'
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi'
import NextPrev from './next-prev'

const Layout = ({ children, frontmatter }) => {
  return (
    <>
      <SEO title={frontmatter.title} />
      <Header />
      <Row>
        <Col sm={24} md={6}>
          <Sidebar link={`/resources/${frontmatter.slug}/`} resource={frontmatter.resource} />
        </Col>
        <Col sm={24} md={18}>
          <main>
            <section css={css`
              position: relative;
              min-height: 500px;
              padding: 0 170px 144px 64px;
              overflow: hidden;
              background: #fff;

              @media (max-width: 767px) {
                padding: 0 20px 144px 20px;
              }
            `}>
              <article className="markdown-section" id="main">
                <h1>{frontmatter.title}</h1>
                <Divider />
                <div dangerouslySetInnerHTML={{ __html: children}} />
                <Divider />
                <a href={`https://github.com/BrainBuzzer/hyperlog.Club/edit/master/resources/${frontmatter.slug}.md`}><FiEdit /> Edit this page</a>
                <Divider />
                <NextPrev link={`/resources/${frontmatter.slug}/`} resource={frontmatter.resource} />
              </article>
            </section>
          </main>
        </Col>
      </Row>
      <BackTop />
    </>
  )
}

Layout.propTypes =  {
  children: PropTypes.string.isRequired,
  frontmatter: PropTypes.object.isRequired
}

export default Layout
