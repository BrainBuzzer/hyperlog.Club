import React from "react"
import PropTypes from "prop-types"
import styled from '@emotion/styled';

import Header from "./header"
import "./layout.css"

import { push } from 'gatsby';
import Footer from './footer';
import UserContext, { defaultUserContext } from '../../context/UserContext';
import { logout, getUserInfo } from '../../utils/auth';
import { spacing } from '../../utils/styles';

const Main = styled('main')`
  display: block;
  margin: 0 auto;
  max-width: 600px;
  padding: ${spacing.xl}px ${spacing.sm}px ${spacing['3xl']}px;
  position: relative;
`;

export default class Layout extends React.Component {
  state = {
    user: {
      ...defaultUserContext,
      handleLogout: () => {
        this.setState({ user: defaultUserContext });
        logout(() => push('/'));
      },
      toggleProfile: () => {
        this.setState(state => ({
          user: { ...state.user, isProfileOpen: !state.user.isProfileOpen }
        }));
      },
      hideProfile: () => {
        this.setState(state => ({
          user: { ...state.user, isProfileOpen: false }
        }));
      }
    }
  };

  async componentDidMount() {
    // Load the user info from Auth0.
    const profile = await getUserInfo();


    this.setState(state => ({
      user: {
        ...state.user,
        loading: false,
        profile
      }
    }));
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <UserContext.Provider value={this.state.user}>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </UserContext.Provider>
      </>
    );
  }
}

