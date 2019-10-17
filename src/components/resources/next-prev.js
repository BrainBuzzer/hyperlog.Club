import React from 'react'
import HTMLCSSResources from '../../../resources/sidebar/htmlcss.yaml';
import PythonResources from '../../../resources/sidebar/python.yaml';
import JavascriptResources from '../../../resources/sidebar/javascript.yaml';
import ElixirResources from '../../../resources/sidebar/elixir.yaml';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Row, Col } from 'antd'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import styled from '@emotion/styled';

const Card = styled('div')`
  height: 100px;
  display: flex;
  width: 100%;
  padding: 45px 0;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  align-items: center;
  justify-content: center;
  color: #888;
  cursor: pointer;

  &:hover {
    color: #3366ff;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

const NextButton = ({ link, title }) => {
  return (
    <>
      <Card onClick={() => navigate(link)}>{title}&nbsp;&nbsp;<FaArrowRight /></Card>
    </>
  )
}


NextButton.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

const PrevButton = ({ link, title }) => {
  return (
    <>
      <Card onClick={() => navigate(link)}><FaArrowLeft />&nbsp;&nbsp;{title}</Card>
    </>
  )
}

PrevButton.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

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
        <Row gutter={[48, 16]}>
          <Col sm={24} md={12}>
            {(this.state.prev != undefined) && (
              <PrevButton link={this.state.prev.link} title={this.state.prev.title} />
            )}
          </Col>
          <Col sm={24} md={12}>
            {}
            <NextButton link={this.state.next.link} title={this.state.next.title} />
          </Col>
        </Row>
      </>
    );
  }
}

NextPrev.propTypes = {
  resource: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default NextPrev