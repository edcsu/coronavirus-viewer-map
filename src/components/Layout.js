import React from 'react';
import PropTypes from 'prop-types';
import favicon from 'assets/images/favicon.ico'
import { Helmet } from 'react-helmet';

import 'assets/stylesheets/application.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children, pageName, lastUpdated}) => {
  let className = '';

  if ( pageName ) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Global COVID19 Tracker</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className="wrapper">
        <Header />
        <main>{ children }</main>
        <Footer lastUpdated={lastUpdated} />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
};

export default Layout;
