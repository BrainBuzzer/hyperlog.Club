import React from 'react';
import { push } from 'gatsby';
import styled from '@emotion/styled';
import { handleAuthentication } from '../utils/auth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: none;
`;

const Message = styled.h1`
  color: #3366ff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Callback = () => {
  handleAuthentication(() => push('/account/dashboard'));

  return (
    <Container>
      <Message>Logging you in...</Message>
    </Container>
  );
};

export default Callback
