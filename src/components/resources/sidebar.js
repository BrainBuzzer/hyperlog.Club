import React from 'react'
import Resources from '../../../resources/sidebar/beginners.yaml';
import { Menu, Affix } from 'antd';
import { Link } from 'gatsby';
import { css } from "@emotion/core"

const Sidebar = ({ link }) => (
  <Affix offsetTop={0}>
    <section css={css`
      overflow-x: hidden;
      overflow-y: hidden;
      max-height: 100vh;
    `}>
      <Menu
        css={css`
          width: 256;
          height: 100vh;
          overflow-y: hidden;
          overflow-x: hidden;
          padding-top: 1.5rem;
          font-family: Inter, sans-serif;

          &:hover {
            overflow-y: auto;
          }
        `}
        mode="inline"
        selectedKeys={[link]}
      >
        {Resources.map((resource, index) => (
          <Menu.ItemGroup key={index} title={resource.title}>
            {resource.items.map((item, i) => (
              <Menu.Item key={item.link}>
                <Link to={item.link}>{item.title}</Link>
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
        ))}
      </Menu>
    </section>
  </Affix>
)

export default Sidebar