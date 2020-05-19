import React from 'react';
import { Style } from './styled';
import PropTypes from 'prop-types';

const Alert = props => {
  const { type, icon, message, description, showIcon, outlined, closable, closeText } = props;

  return (
    <Style
      message={message}
      type={type}
      description={description}
      closable={closable}
      showIcon={showIcon && showIcon}
      outlined={outlined}
      closeText={closeText && closeText}
      icon={icon && icon}
    />
  );
};

Alert.defaultProps = {
  type: 'success',
  message: 'Hello there! A simple success alert—check it out!',
};

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.string,
  showIcon: PropTypes.bool,
  outlined: PropTypes.bool,
  closable: PropTypes.bool,
  closeText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  icon: PropTypes.object,
};

export default Alert;
