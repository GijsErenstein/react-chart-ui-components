import React from 'react';
import PropTypes from 'prop-types';

import { colors, spacings } from 'config/styles';
import styled from 'styled-components';
import ColorChanger from 'helpers/ColorChanger';

/**
 *
 * @param text
 * @param color
 * @param restProps
 * @return {*}
 * @constructor
 */
function Button({ text = 'Submit', color = colors.interactive, onClick = () => {} }) {
  const lighterColor = ColorChanger.lightenColor(color, 0.1);
  const contrastColor = ColorChanger.getBlackOrWhiteContrastColor(color);

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

  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}
Button.defaultProps = {
  text: 'Submit',
  color: colors.interactive,
  onClick: () => {},
};


Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};
export default Button;
