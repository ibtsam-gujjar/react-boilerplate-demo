import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'rebass';
import Button from '../Button/Button';

const BoxContainer = ({ heading, btnText }) => (
  <Box>
    <Heading>{heading}</Heading>
    <Button>{btnText}</Button>
  </Box>
);

BoxContainer.propTypes = {
  heading: PropTypes.string,
  btnText: PropTypes.string,
};

export default BoxContainer;
