import React, { Component } from 'react';
import { colors, spacings } from 'config/styles';
import PopIn from 'config/Keyframes';
import formatNumber from 'helpers/NumberFormatter';
import ColorChanger from 'helpers/ColorChanger';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class LineChart extends Component {
  /**
   * @returns {Array}
   */
  static formatCoordinatesAsPair(values = []) {
    if (values.length < 2) {
      return [];
    }

    const coordinates = [];
    const maxValue = Math.max(0, ...values);
    const step = 100 / (values.length - 1);

    values.forEach((value, key) => {
      coordinates.push([key * step, Math.min(maxValue, (maxValue - value))]);
    });

    return coordinates;
  }

  /**
   *
   * @returns {Array}
   */
  static formatCoordinatesForAxis(axis = []) {
    const values = [];
    const step = 100 / (axis.length - 1);

    axis.forEach((axisLabel, key) => {
      values.push({ x: key * step, label: axisLabel });
    });

    return values;
  }

  /**
   * @param {function} command
   * @param {Array} values
   *
   * @returns {Array}
   */
  static formatValuesForLine(command, values = []) {
    const coordinates = this.formatCoordinatesAsPair(values);

    // build the d attributes by looping over the points
    return coordinates.reduce((acc, point, i, a) => (i === 0
    // if first point
      ? `M ${point[0]},${point[1]}`
    // else
      : `${acc} ${command(point, i, a)}`),
    '');
  }

  /**
   * @param {function} command
   * @param {Array} values
   *
   * @returns {Array}
   */
  static formatValuesForFill(command, values = []) {
    const coordinates = this.formatCoordinatesAsPair(values);
    const fillCoordinates = [
      [0, Math.max(...values)],
      ...coordinates,
      [100, Math.max(...values)],
    ];

    return fillCoordinates.reduce((acc, point, i, a) => {
      if (i === 0) {
        return `M ${point[0]},${point[1]}`;
      }

      if (i === 1 || i === fillCoordinates.length - 1) {
        return `${acc} ${this.lineStrategy(point)}`;
      }

      return `${acc} ${command(point, i, a)}`;
    }, '');
  }

  /**
   * @param {Array} point
   *
   * @return {string}
   */
  static lineStrategy(point) {
    return `L ${point[0]} ${point[1]}`;
  }

  /**
   * @param {Array} point
   * @param {int} i
   * @param {Array} a
   *
   * @returns {string}
   */
  static bezierStrategy(point, i, a) {
    // start control point
    const [cpsX, cpsY] = LineChart.controlPoint(a[i - 1], a[i - 2], point);
    // end control point
    const [cpeX, cpeY] = LineChart.controlPoint(point, a[i - 1], a[i + 1], true);
    return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
  }

  /**
   * @param {Array} pointA
   * @param {Array} pointB
   *
   * @return {{length: number, angle: number}}
   */
  static line(pointA, pointB) {
    const lengthX = pointB[0] - pointA[0];
    const lengthY = pointB[1] - pointA[1];
    return {
      length: Math.sqrt((lengthX ** 2) + (lengthY ** 2)),
      angle: Math.atan2(lengthY, lengthX),
    };
  }

  /**
   * @param current
   * @param previous
   * @param next
   * @param reverse
   *
   * @see https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
   *
   * @return {Array}
   */
  static controlPoint(current, previous, next, reverse) {
    const p = previous || current;
    const n = next || current;
    // The smoothing ratio
    const smoothing = 0.15;
    // Properties of the opposed-line
    const o = this.line(p, n);
    // If is end-control-point, add PI to the angle to go backward
    const angle = o.angle + (reverse ? Math.PI : 0);
    const length = o.length * smoothing;
    // The control point position is relative to the current point
    const x = current[0] + Math.cos(angle) * length;
    const y = current[1] + Math.sin(angle) * length;
    return [x, y];
  }

  constructor(props) {
    super(props);

    this.showValue = this.showValue.bind(this);

    this.state = {
      shownValue: 0,
      shownPosition: 1,
    };
  }

  /**
     * @param value
     * @param position
     */
  showValue(value, position) {
    this.setState({
      shownValue: value,
      shownPosition: 100 - position,
    });
  }

  render() {
    const {
      decimals = 2,
      color = colors.interactive,
      rounded = false,
      values = [],
      axis = [],
      prefix = '',
      postfix = '',
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

    const BlueDot = styled.line`
          stroke-width : 6px;
          stroke: ${color};
          transition: stroke-width 300ms;
          pointer-events : none;
          vector-effect: non-scaling-stroke;
          stroke-linecap: round;
           
          ${HoverElement}:hover ~ & {
            stroke-width : 10px; 
          }
        `;

    const LightBlueDot = styled.line`
          stroke-width : 0;
          stroke: ${lighterColor};
          transition: stroke-width 300ms, stroke 300ms;
          pointer-events : none;
          vector-effect: non-scaling-stroke;
          stroke-linecap: round;
           
          ${HoverElement}:hover ~ & {
            stroke-width : 6px; 
          }
        `;

    const TopLine = styled.line`
          stroke-width : 2px;
          stroke: ${color};
          opacity: 0.2;
          vector-effect: non-scaling-stroke;
          pointer-events : none;
        `;

    const BottomLine = styled.line`
          stroke-width : 0;
          stroke: transparent;
          pointer-events : none;
          vector-effect: non-scaling-stroke;
          transition: stroke-width 100ms;
          
          ${HoverElement}:hover ~ & {
          stroke-width : 2px;
            stroke: ${color}; 
          }
        `;

    const AxisLine = styled.div`
          display: flex;
          flex-flow: row nowrap;
          border-top : 2px solid ${darkerColor}; 
        `;

    const AxisPoint = styled.div`
          flex: 1 1 auto;
          border-left : 2px solid ${darkerColor}; 
          pointer-events : none;
          overflow: visible;
          position: relative;
          height: 10px;
          
          &:last-child {
            width: 0;
            flex: 0 0 0; 
          }
        `;

    const AxisValue = styled.div`
          top: 12px;
          left: 0;
          position: absolute;
          color : ${darkerColor};
          font-family : sans-serif;
          font-size : 12px;
          font-weight: lighter;
          text-align: center;
          min-width: 100px;
          transform:translate(-50%,0);
        
          ${AxisPoint}:last-child & {
            text-align: right;
            transform:translate(-100%,0);
          }
        
          ${AxisPoint}:first-child & {
            text-align: left;
            transform:translate(0,0);
          }
        `;

    const Value = styled.span`
          display: inline-block;
          font-size : 12px;
          color : ${contrastColor};
          font-family : sans-serif;
          font-weight: lighter;
          position: absolute;
          top: 12px;
          transform: translate(50%,-${spacings.small});
          background: ${color};
          padding: ${spacings.tiny} ${spacings.small};
          border-radius: ${spacings.tiny};
          opacity: 0;
          transition: opacity 200ms;
          
          animation: ${PopIn} 200ms ease-out;
          
          &:not(:empty) {
            opacity: 1;
            
            &:after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid ${color};
                transform: translate(-50%, 0);
            }
          }
        `;

    const ChartFill = styled.path`
          vector-effect: non-scaling-stroke;
          pointer-events : none;
          fill : ${color};
          stroke: ${color};
          opacity: 0.2;
          stroke-width: 2;
        `;

    const ChartPath = styled.path`
          vector-effect: non-scaling-stroke;
          pointer-events : none;
          fill : none;
          stroke: ${color};
          stroke-width: 2;
        `;

    // Calculate svg coordinates
    const maxValue = Math.max(...values);

    // Build the paths for rounder or straight lines,
    // instructions used from:
    // https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
    const strategy = rounded ? LineChart.bezierStrategy : LineChart.lineStrategy;
    const pathCoordinates = LineChart.formatValuesForLine(strategy, values);
    const fillCoordinates = LineChart.formatValuesForFill(strategy, values);

    const dotCoordinates = LineChart.formatCoordinatesAsPair(values);
    const hoverWidth = 110 / dotCoordinates.length;
    const axisCoordinates = LineChart.formatCoordinatesForAxis(axis);
    const { shownValue, shownPosition } = this.state;

    return (
      <Container>
        <ChartContainer preserveAspectRatio="none" viewBox={`0 0 100 ${maxValue}`}>
          <ChartPath d={pathCoordinates} />
          <ChartFill d={fillCoordinates} />

          { dotCoordinates.map((coordinates) => {
            const x = coordinates[0];
            const y = coordinates[1];
            return (
              <g key={x}>
                <HoverElement
                  x={x - hoverWidth / 2}
                  y={0}
                  width={hoverWidth * 0.8}
                  height={maxValue}
                  onMouseEnter={() => { this.showValue(maxValue - y, x); }}
                  onMouseLeave={() => { this.showValue(null, null); }}
                />
                <BottomLine x1={x} y1={y} x2={x} y2={maxValue} />
                <TopLine x1={x} y1={y} x2={x} y2={0} />
                <BlueDot x1={x} y1={y} x2={x} y2={y} />
                <LightBlueDot x1={x} y1={y} x2={x} y2={y} />
              </g>
            );
          })}

        </ChartContainer>

        { axisCoordinates.length
          ? (
            <AxisLine>
              { axisCoordinates.map((axisPoint) => (
                <AxisPoint key={axisPoint.x}>
                  <AxisValue>{axisPoint.label}</AxisValue>
                </AxisPoint>
              ))}
            </AxisLine>
          ) : null}


        { shownValue !== null
          ? (
            <Value style={{ right: `${shownPosition}%` }}>
              {prefix}
              {' '}
              {formatNumber(shownValue, decimals)}
              {' '}
              {postfix}
            </Value>
          ) : null}

      </Container>
    );
  }
}

LineChart.defaultProps = {
  decimals: 2,
  color: colors.interactive,
  rounded: false,
  values: [],
  axis: [],
  prefix: '',
  postfix: '',

};

LineChart.propTypes = {
  decimals: PropTypes.number,
  color: PropTypes.string,
  rounded: PropTypes.bool,
  values: PropTypes.arrayOf(PropTypes.number),
  axis: PropTypes.arrayOf(PropTypes.string),
  prefix: PropTypes.string,
  postfix: PropTypes.string,
};

export default LineChart;
