import React, { Component } from 'react';
import { colors, lighterColors, darkerColors, spacings } from 'config/styles.js';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${colors.interactive};
    color: ${colors.white};
    border-radius: ${spacings.tiny};
    line-height: ${spacings.large};
    padding: 0 ${spacings.medium};
    font-size: ${spacings.medium};
    border : none;
    cursor: pointer;
    box-shadow: 0 0 6px 0 ${lighterColors.interactive};
    
    &:hover {
      background: ${lighterColors.interactive};
      box-shadow: 0 0 7px 0 ${lighterColors.interactive};
    }
    
    &:active {
      box-shadow: 0 0 4px 0 ${lighterColors.interactive};
    }
`;



class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <StyledButton {...this.props}>{this.props.text}</StyledButton>;
    }

}

export default Button;
