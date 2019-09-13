import React from 'react'
import Resources from '../../../resources/sidebar/beginners.yaml';
import { Menu } from 'antd';
import { Link } from 'gatsby';

const Sidebar = ({ link }) => (
  <Menu
    style={{
      width: 256,
      height: `100vh`,
      paddingTop: `1.5rem`,
      fontFamily: `Inter, sans-serif`
     }}
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
)

export default Sidebar