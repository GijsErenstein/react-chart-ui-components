import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors, spacings } from 'config/styles';
import styled from 'styled-components';

class BarChart extends Component {
  /**
   * @param {Array} values
   * @param {number} maxXValue
   *
   * @return {Array}
   */
  static formatCoordinatesAsPair(values = [], maxXValue) {
    if (values.length < 2) {
      return [];
    }

    const coordinates = [];
    const step = maxXValue / (values.length - 1);

    values.forEach((value, index) => {
      coordinates.push({
        x: index * step,
        y: value.value,
        label: value.label,
        color: value.color,
      });
    });

    return coordinates;
  }

  /**
   * @param {Array} axis
   * @return {Array}
   */
  static formatCoordinatesForAxis(axis = []) {
    const values = [];
    const step = 100 / (axis.length - 1);


    axis.forEach((axisItem, index) => {
      values.push({ x: index * step, label: axis });
    });

    return values;
  }

  render() {
    const { values = [] } = this.props;

    // create colors
    // const darkerColor = ColorChanger.darkenColor(color, 0.2);
    // const lighterColor = ColorChanger.lightenColor(color, 0.1);
    // const contrastColor = ColorChanger.getBlackOrWhiteContrastColor(color);

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

    const Bar = styled.rect`
          vector-effect: non-scaling-stroke;
        `;


    // Calculate svg coordinates
    const valuesArray = values.map((value) => parseFloat(value.value));
    const maxValue = Math.max(...valuesArray);

    const hoverWidth = 100 / (values.length);

    const lastBarXCoordinate = 100 - (100 / (values.length + 1));
    const dotCoordinates = BarChart.formatCoordinatesAsPair(values, lastBarXCoordinate);

    return (
      <Container>
        <ChartContainer preserveAspectRatio="none" viewBox={`0 0 100 ${maxValue}`}>

          { dotCoordinates.map((bar) => (
            <g key={bar.x}>
              <Bar
                x={bar.x}
                y={maxValue - bar.y}
                width={hoverWidth}
                height={bar.y}
                style={{ fill: bar.color ? bar.color : colors.interactive }}
              />
            </g>
          ))}

        </ChartContainer>

      </Container>
    );
  }
}

BarChart.defaultProps = {
  values: [],
};


BarChart.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
};

export default BarChart;
