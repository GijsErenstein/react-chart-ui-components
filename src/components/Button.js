import React from 'react';
import { colors, spacings } from 'config/styles.js';
import styled from 'styled-components';
import ColorChanger from 'helpers/ColorChanger';

function Button({text = "Submit", color = colors.interactive, ...restProps}) {

        let lighterColor = ColorChanger.lightenColor(color, 0.1),
            contrastColor = ColorChanger.getBlackOrWhiteContrastColor(color);

        const StyledButton = styled.button`
            background-color: ${color};
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

        return <StyledButton { ...restProps }>{text}</StyledButton>;

}

export default Button;
