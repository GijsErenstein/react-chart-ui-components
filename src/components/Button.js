import React, { Component } from 'react';
import { colors, spacings } from 'config/styles.js';
import styled from 'styled-components';
import ColorChanger from 'helpers/ColorChanger';

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        // Override colors
        let uiColor = this.props.color ? this.props.color : colors.interactive,
            lighterColor = ColorChanger.lightenColor(uiColor, 0.1),
            contrastColor = ColorChanger.getBlackOrWhiteContrastColor(uiColor);

        const StyledButton = styled.button`
            background-color: ${uiColor};
            color: ${contrastColor};
            border-radius: ${spacings.tiny};
            line-height: ${spacings.large};
            padding: 0 ${spacings.medium};
            font-size: ${spacings.medium};
            border : none;
            cursor: pointer;
            box-shadow: 0 0 6px 0 ${lighterColor};
            
            &:hover {
              background: ${lighterColor};
              box-shadow: 0 0 7px 0 ${lighterColor};
            }
            
            &:active {
              box-shadow: 0 0 4px 0 ${lighterColor};
            }
        `;

        return <StyledButton { ...this.props }>{this.props.text}</StyledButton>;
    }

}

export default Button;
