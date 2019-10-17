import React from 'react'
import HTMLCSSResources from '../../../resources/sidebar/htmlcss.yaml';
import PythonResources from '../../../resources/sidebar/python.yaml';
import JavascriptResources from '../../../resources/sidebar/javascript.yaml';
import ElixirResources from '../../../resources/sidebar/elixir.yaml';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// import { css } from "@emotion/core"

class NextPrev extends React.Component {
  constructor() {
    super()
    this.state = {
      Resources: [],
      prev: {},
      next: {}
    }
    this.compute = this.compute.bind(this)
  }

  componentDidMount() {
    let {resource, link} = this.props
    /**
     * Check the Resource allocation
     */
    if(resource === 'htmlcss') {
      this.setState({ Resources: HTMLCSSResources }, () => {this.compute(link)})
    } else if(resource === 'python') {
      this.setState({ Resources: PythonResources }, () => {this.compute(link)})
    } else if(resource === 'javascript') {
      this.setState({ Resources: JavascriptResources }, () => {this.compute(link)})
    } else if(resource === 'elixir') {
      this.setState({ Resources: ElixirResources }, () => {this.compute(link)})
    }
  }

  compute = (resourceLink) => {
    // Map through entire array of chapters provided in the YAML file
    this.state.Resources.map((a, arrIndex) => {
      // Go through the items of each chapter and check if the link matches
      a.items.map((item, i) => {
        if(item.link === resourceLink) {
          // If link doesn't match, go to the previous chapter and set the last resources there as prev.
          if(a.items[i-1] === undefined) {
            // Check if this is the first chapter as the previous chapter to this won't exist.
            if(arrIndex === 0) {
              this.setState({ prev: {} })
            } else {
              // If the previous chapter exists, set the prev
              this.setState({prev: this.state.Resources[arrIndex-1].items[this.state.Resources[arrIndex-1].items.length-1]})
            }
          } else {
            // If the link matches, check if previous item exists. If so, set prev to that item.
            this.setState({prev: a.items[i-1]})
          }
  
          // Check if the next item exists, if it doesn't, set the first item of next chapter as next.
          if(a.items[i+1] === undefined) {
            this.setState({next: this.state.Resources[arrIndex+1].items[0]})
          } else {
            // If the next item exists, set the next link to that item
            this.setState({next: a.items[i+1]})
          }
        }
      })
    })
  }

  render() {
    return (
      <>
        <Link to={this.state.prev.link}>{this.state.prev.title}</Link>
        <Link to={this.state.next.link}>{this.state.next.title}</Link>
      </>
    );
  }
}

NextPrev.propTypes = {
  resource: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default NextPrev