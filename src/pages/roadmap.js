import React from "react"

import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import ReactRoadmap from "../../resources/curations/react.yaml"
import { Collapse, Timeline } from 'antd'

class Roadmap extends React.Component {
  render() {
    const { Panel } = Collapse;
    const { Item } = Timeline;
    return(
      <Layout>
        <SEO title="React Roadmap" />
        <Collapse accordion>
          {ReactRoadmap.map((main) => {
            return main.topics.map((topic, i) => (
              <Panel header={topic.name} key={i}>
                <Timeline>
                  {topic.lessons.map((lesson, ii) => (
                    <Item key={ii} color={lesson.difficulty}>
                      <b><a href={lesson.link}>{lesson.name}</a></b>
                      <p>{lesson.description}</p>
                    </Item>
                  ))}
                </Timeline>
              </Panel>
            ))
          })}
          
        </Collapse>
      </Layout>
    )
  }
}

export default Roadmap
