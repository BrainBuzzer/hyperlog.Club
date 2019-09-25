import React from 'react'
import BeginnerResources from '../../../resources/sidebar/beginners.yaml';
import HTMLCSSResources from '../../../resources/sidebar/htmlcss.yaml';
import PythonResources from '../../../resources/sidebar/python.yaml';
import JavascriptResources from '../../../resources/sidebar/javascript.yaml';
import { Menu, Affix } from 'antd';
import { Link } from 'gatsby';
import { css } from "@emotion/core"

class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {
      Resources: []
    }
  }
  componentDidMount() {
    let resource = this.props.resource
    /**
     * Check the Resource allocation
     */
    if(resource === 'beginners') {
      this.setState({ Resources: BeginnerResources })
    } else if(resource === 'htmlcss') {
      this.setState({ Resources: HTMLCSSResources })
    } else if(resource === 'python') {
      this.setState({ Resources: PythonResources })
    } else if(resource === 'javascript') {
      this.setState({ Resources: JavascriptResources })
    }
  }

  render() {
    let link = this.props.link

    return (
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
            {this.state.Resources.map((resource, index) => (
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
    );
  }
}

export default Sidebar