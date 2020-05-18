import Styled from 'styled-components';
import { Button } from 'antd';
const ButtonGroup = Button.Group;

const ButtonStyled = Styled(Button)`
background: ${({ type, theme }) => type !== 'default' && theme[type + '-color']};
border-width: 1px;
border-color: ${({ type, theme }) => (type !== 'default' ? theme[type + '-color'] : theme[type + '-color'])};
border-style: ${({ type }) => type !== 'dashed' ? 'solid':'dashed'};
color: ${({ type }) => type !== 'default' && '#ffffff'};
margin: 4px;
display: inline-flex;
align-items: center;
justify-content: center;
border-radius: ${({ shape }) => (!shape ? '4px' : '40px')};
padding: 0px 20px;
height: ${({ size, theme }) => (size !== 'default' ? theme['btn-height-'+size] : '42px')};
font-weight: 500;
box-shadow: 0 0;
&:hover, &:focus {
    background: ${({ type, theme }) => type !== 'default' && theme[type + '-hover']};
    border: 1px solid ${({ type, theme }) => type !== 'default' && theme[type + '-hover']};
    color: ${({ type }) => type !== 'default' && '#ffffff'};        
}

${({ outlined, theme, type }) => outlined && outline(theme, type)}
${({ lightColored, theme, type }) => lightColored && lightColor(theme, type)}
${({ raised, theme, type }) => raised && raise(theme, type)}
${({ squared, theme, type }) => squared && square(theme, type)}
${({ squared, outlined, theme, type }) => squared && outlined && squareOutline(theme, type)}
${({ social, color, shape }) => social && socialButton(color, shape)}
`;

const outline = (theme, type) => {
  return `
      background: transparent;
      border: 1px solid ${type !== 'default' ? theme[type + '-color'] : theme['disabled-color']};
      color: ${type !== 'default' && theme[type + '-color']};
     
      &:hover, &:focus {
          background: ${type !== 'default' && theme[type + '-hover']};
          border: 1px solid ${type !== 'default' && theme[type + '-hover']};
          color: ${type !== 'default' && '#ffffff'};        
      }
  `;
};

const lightColor = (theme, type) => {
  return `
      background: ${type !== 'default' && theme[type + '-color']}15;
      border: 1px solid ${type !== 'default' ? theme[type + '-color'] : theme['disabled-color']}15;
      color: ${type !== 'default' && theme[type + '-color']};
      &:hover, &:focus {
          background: ${type !== 'default' && theme[type + '-hover']}15;
          border: 1px solid ${type !== 'default' && theme[type + '-hover']}15;
          color: ${type !== 'default' && '#ffffff'};        
      }
  `;
};

const raise = (theme, type) => {
  return `
      box-shadow: 0 10px 15px ${type !== 'white' ? theme[type + '-color'] : '#9299B8'}20;
  `;
};

const square = (theme, type) => `
    background: ${type !== 'default' && theme[type + '-color']};
    border: 1px solid ${type !== 'default' ? theme[type + '-color'] : theme['disabled-color']};
    color: ${type !== 'default' && '#ffffff'};
    margin: 4px;
    border-radius: 0px;
    padding: 0px 15px;

    &:hover, &:focus {
        background: ${type !== 'default' && theme[type + '-hover']};
        border: 1px solid ${type !== 'default' && theme[type + '-hover']};
        color: ${type !== 'default' && '#ffffff'};        
    }
`;

const squareOutline = (theme, type) => `
    background: transparent;
    border: 1px solid ${type !== 'default' ? theme[type + '-color'] : theme['disabled-color']};
    color: ${type !== 'default' && theme[type + '-color']};
    margin: 4px;
    border-radius: 0px;
    padding: 0px 15px;
    &:hover, &:focus {
        background: ${type !== 'default' && theme[type + '-hover']};
        border: 1px solid ${type !== 'default' && theme[type + '-hover']};
        color: ${type !== 'default' && '#ffffff'};        
    }
`;

const socialButton = (color, shape) => `
    background: ${color};
    background: ${color};
    border: 1px solid ${color};
    color: #ffffff;
    margin: 4px;
    border-radius: ${!shape ? '4px' : '40px'};
    padding: 0px 12px;
    display: inline-flex;
    align-items: center;
    span {
        padding-left: 5px;
    }
    &:hover, &:focus {
        background: ${color}90;       
        border: 1px solid ${color}90;
        color: #ffffff;        
    }
`;

const ButtonStyledGroup = Styled(ButtonGroup)`
    margin: 4px;  
    button {
        margin: 0px;
    }
`;

export { ButtonStyled, ButtonStyledGroup };
