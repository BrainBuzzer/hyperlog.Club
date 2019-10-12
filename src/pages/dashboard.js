import React from 'react';
import Layout from '../components/shared/layout';
import Dashboard from '../components/Dashboard/Dashboard';
import PrivateRoute from '../components/shared/PrivateRoute';
import PropTypes from 'prop-types';

const DashboardPage = ({ location }) => (
  <Layout location={location}>
    <PrivateRoute path="/dashboard" component={Dashboard} />
  </Layout>
);

DashboardPage.propTypes = {
  location: PropTypes.object
}

export default DashboardPage
