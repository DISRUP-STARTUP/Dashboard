import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../config/theme/themeVariables';
import { H1 } from './style';

const Header = ({ name }) => {
  return (
    <ThemeProvider theme={theme}>
      <H1>{name}</H1>
    </ThemeProvider>
  );
};

Header.propTypes = {
  name: PropTypes.string,
};
export default Header;
