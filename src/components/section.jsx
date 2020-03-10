import React from 'react';
import {Container} from '@material-ui/core';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return (
    <Container m="2rem">
      { children }
      <svg width="100%" height="96px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
        <path className="shape-fill"
              d="M0,0 C40,33 66,52 75,52 C83,52 92,33 100,0 L100,100 L0,100 L0,0 Z"/>
      </svg>
    </Container>
  )
};
// path { fill: 'fff' }
// or fill zebra color
// .. or skip zebras entirely

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
