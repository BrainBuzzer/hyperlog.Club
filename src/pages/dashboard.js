import React from 'react';
import Layout from '../components/shared/layout';
import Dashboard from '../components/Dashboard/Dashboard';
import PrivateRoute from '../components/shared/PrivateRoute';

const DashboardPage = ({ location }) => (
  <Layout location={location}>
    <PrivateRoute path="/dashboard" component={Dashboard} />
  </Layout>
);

export default DashboardPage
