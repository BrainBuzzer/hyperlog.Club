import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  overflow: none;
  text-align: center;
`;

class Dashboard extends React.Component {
  render() {
    return(
      <>
        <Container>
          <h1>🤫We're working on something amazing</h1>
        </Container>
      </>
    )
  }
}

export default Dashboard
