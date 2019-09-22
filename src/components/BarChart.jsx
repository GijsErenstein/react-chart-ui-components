import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors, lightColors, spacings } from 'config/styles.js';
import ColorChanger from 'helpers/ColorChanger';
import styled from 'styled-components';

class BarChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      decimals = 2,
      color = colors.interactive,
      rounded = false,
      values = [],
      axis = [],
      prefix = null,
      postfix = null,
      ...restProps
    } = this.props;

    // create colors
    const darkerColor = ColorChanger.darkenColor(color, 0.2);
    const lighterColor = ColorChanger.lightenColor(color, 0.1);
    const contrastColor = ColorChanger.getBlackOrWhiteContrastColor(color);

    const Container = styled.div`
            display: block;
            padding: ${spacings.large} 0 0 0;
            position: relative;
        `;

    const ChartContainer = styled.svg`
            display : block;
            overflow: visible;
            height: 150px;
            width: 100%;
            position: relative;
        `;

    const HoverElement = styled.rect`
          fill: transparent;
          vector-effect: non-scaling-stroke;
        `;


    // Calculate svg coordinates
    const valuesArray = values.map((value) => parseFloat(value.value));

    const maxValue = Math.max(...valuesArray);
    const dotCoordinates = this.formatCoordinatesAsPair(values);
    const hoverWidth = 100 / (dotCoordinates.length - 1);
    const lastX = 100 - hoverWidth;
    console.log(maxValue);
    console.log(hoverWidth);
    console.log(dotCoordinates);


    return (
      <Container>
        <ChartContainer preserveAspectRatio="none" viewBox={`0 0 100 ${maxValue}`}>

          { dotCoordinates.map((bar) => {
            console.log(bar);
            return (
              <g key={bar.x}>
                <HoverElement
                  x={bar.x}
                  y={0}
                  width={hoverWidth}
                  height={maxValue}
                  style={{ fill: bar.color }}
                />
              </g>
            );
          })}

        </ChartContainer>

      </Container>
    );
  }

  /**
     * @returns {Array}
     */
  formatCoordinatesAsPair(values = []) {
    if (values.length < 2) {
      return [];
    }

    const valuesOnly = values.map((value) => value.value);

    const coordinates = [];
    const maxValue = Math.max(0, ...valuesOnly);
    const step = 100 / (values.length - 1);

    for (let i = 0; i < values.length; i++) {
      coordinates.push({
        x: i * step,
        y: Math.min(maxValue, (maxValue - valuesOnly[i])),
        label: values[i].label,
        color: values[i].color,
      });
    }

    return coordinates;
  }

  /**
     *
     * @returns {Array}
     */
  formatCoordinatesForAxis(axis = []) {
    const values = [];
    const step = 100 / (axis.length - 1);

    for (let i = 0; i < axis.length; i++) {
      values.push({ x: i * step, label: axis[i] });
    }

    return values;
  }
}

export default BarChart;
