import Styled from 'styled-components';
import { Alert } from 'antd';

/**
 * Ant built in alert type is sufficient, we don't need extra accented alert but
 * variation is ancouraged
 */

const Style = Styled(Alert)`
  border-radius: ${({ shape }) => (!shape ? '4px' : '40px')} !important;
  border-width: 0px !important;
  margin: 15px 0 0 0!important;
  padding: 10.5px 20px!important;
  .ant-alert-message{
    font-size: 15px !important;
    font-weight: 500 !important;
  }
  .ant-alert-message, .ant-alert-description {
    color: ${({ type, theme }) => theme[type + '-color']} !important;
  }

  ${({ outlined, theme, type }) => outlined && outline(theme, type)}

  ${({ showIcon }) =>
    showIcon &&
    `padding-left: 60px!important;
    i.ant-alert-icon {
      color: ${({ type, theme }) => theme[type + '-color']} !important;
      background: #ffffff80 !important;
      height: 100%;
      width: 50px;
      position: absolute;
      top: 0;
      left: 0;
    }`}

  .ant-alert-close-icon {
    top: 12px !important;
    right: 20px !important;
    svg,
    span,
    img,
    i{
      width: 8px;
      height: 8px;
    }
  }
  
  &:hover, &:focus, &:active {
      background: ${({ type, theme }) => theme[type + '-hover']}15 !important;             
  }
`;

const outline = (theme, type) => {
  return `
    border: 1px solid ${theme[type + '-color']} !important;
    background: #fff!important;
    &:hover, &:focus, &:active {
      .ant-alert-message, .ant-alert-message{
        color: #fff;
      }
    }
    .ant-alert-message, .ant-alert-message {
      color: ${theme[type + '-color']}
    }
  `;
};

export { Style };
