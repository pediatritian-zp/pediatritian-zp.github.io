import React from 'react';
import {Container} from '@material-ui/core';
import PropTypes from 'prop-types';
import Divider from './divider';

const Section = ({ children }) => {
  return (
    <Container m="2rem">
      { children }
      <Divider/>
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
