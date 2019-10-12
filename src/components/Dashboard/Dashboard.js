import React from 'react'
import styled from '@emotion/styled'
import UserContext from '../../context/UserContext'
import { Button } from 'antd';

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
        <UserContext.Consumer>
          {({handleLogout}) => (
            <Container>
              <h1>🤫We&apos;re working on something amazing</h1>
              <Button onClick={handleLogout}>Logout</Button>
            </Container>
          )}
        </UserContext.Consumer>
      </>
    )
  }
}

export default Dashboard
