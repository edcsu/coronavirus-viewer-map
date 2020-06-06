import React from 'react';
// import CovidImage from 'assets/images/covidvirus.svg';

// import { Link } from 'gatsby';
import Container from 'components/Container';

const Header = () => {

  return (
    <header>
      <Container type="content">
        {/* <img src={CovidImage} alt="covid virus"></img> */}
        <p>Global COVID19 Tracker</p>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2/">Page 2</Link>
          </li>
        </ul> */}
      </Container>
    </header>
  );
};

export default Header;
