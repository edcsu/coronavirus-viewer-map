import React from 'react';
import { friendlyDate } from 'lib/util';

import Container from 'components/Container';

const Footer = ({lastUpdated}) => {
  return (
    <footer>
      <Container>
        <p>
          <strong>Last Updated: </strong> { lastUpdated ? friendlyDate(lastUpdated) : '-' }
          <span> &copy; { new Date().getFullYear() }. </span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
