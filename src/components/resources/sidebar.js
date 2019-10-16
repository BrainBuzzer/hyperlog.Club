import React from 'react'
import HTMLCSSResources from '../../../resources/sidebar/htmlcss.yaml';
import PythonResources from '../../../resources/sidebar/python.yaml';
import JavascriptResources from '../../../resources/sidebar/javascript.yaml';
import ElixirResources from '../../../resources/sidebar/elixir.yaml';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
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
    if(resource === 'htmlcss') {
      this.setState({ Resources: HTMLCSSResources })
    } else if(resource === 'python') {
      this.setState({ Resources: PythonResources })
    } else if(resource === 'javascript') {
      this.setState({ Resources: JavascriptResources })
    } else if(resource === 'elixir') {
      this.setState({ Resources: ElixirResources })
    }
  }

  render() {
    let link = this.props.link

    return (
        <section css={css`
          overflow-x: hidden;
          overflow-y: hidden;
          max-height: 100vh;
        `}>
          <Menu
            css={css`
              width: 256;
              overflow-y: hidden;
              overflow-x: hidden;
              padding-top: 1.5rem;
              font-family: Inter, sans-serif;
            `}
            mode="inline"
            selectedKeys={[link]}
          >
            {this.state.Resources.map((resource, index) => (
              <Menu.ItemGroup key={index} title={resource.title}>
                {resource.items.map((item) => (
                  <Menu.Item key={item.link}>
                    <Link to={item.link}>{item.title}</Link>
                  </Menu.Item>
                ))}
              </Menu.ItemGroup>
            ))}
          </Menu>
        </section>
    );
  }
}

Sidebar.propTypes = {
  resource: PropTypes.object,
  link: PropTypes.string
}

export default Sidebar