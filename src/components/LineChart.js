import React, { Component } from 'react';
import { colors, lightColors, spacings } from 'config/styles.js';
import { PopIn } from 'config/Keyframes.js';
import formatNumber from "helpers/NumberFormatter";
import styled from "styled-components";

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
  stroke: ${colors.interactive};
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
  stroke: ${lightColors.interactive};
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
  stroke: ${colors.interactive};
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
    stroke: ${colors.interactive}; 
  }
`;

const AxisLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-top : 2px solid ${colors.dark}; 
`;

const AxisPoint = styled.div`
  flex: 1 1 auto;
  border-left : 2px solid ${colors.dark}; 
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
  color : ${colors.dark};
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
  color : ${colors.white};
  font-family : sans-serif;
  font-weight: lighter;
  position: absolute;
  top: 12px;
  transform: translate(50%,-${spacings.small});
  background: ${colors.interactive};
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
        border-top: 4px solid ${colors.interactive};
        transform: translate(-50%, 0);
    }
  }
`;

const ChartFill = styled.polyline`
  vector-effect: non-scaling-stroke;
  pointer-events : none;
  fill : ${colors.interactive};
  stroke: ${colors.interactive};
  opacity: 0.2;
  stroke-width: 2;
`;

const ChartLine = styled.polyline`
  vector-effect: non-scaling-stroke;
  pointer-events : none;
  fill : none;
  stroke: ${colors.interactive};
  stroke-width: 2;
`;


class LineChart extends Component {

    constructor(props) {
        super(props);

        this.formatValuesForLine = this.formatValuesForLine.bind(this);
        this.formatValuesForDots = this.formatValuesForDots.bind(this);
        this.showValue = this.showValue.bind(this);

        this.decimals = this.props.decimals ? this.props.decimals : 0;

        this.state = {
            shownValue : 0,
            shownPosition: 1,
        }
    }

    render() {

        if (!this.props.values) {
            return null;
        }


        let maxValue = Math.max(...this.props.values),
            lineCoordinates = this.formatValuesForLine(),
            fillCoordinates = [0, maxValue, ...lineCoordinates, 100, maxValue],
            dotCoordinates = this.formatValuesForDots(),
            hoverWidth = 110 / dotCoordinates.length,
            axisCoordinates = this.formatCoordinatesForAxis();

        return (
            <Container>
                <ChartContainer preserveAspectRatio="none" viewBox={"0 0 100 " + maxValue}>
                    <ChartFill points={fillCoordinates.join(',')}/>
                    <ChartLine points={lineCoordinates.join(',')}/>
                    { dotCoordinates.map((coordinates) => {
                        let x = coordinates[0],
                            y = coordinates[1];
                        return (
                            <g key={x}>
                                <HoverElement x={x - hoverWidth / 2 } y={0} width={hoverWidth*0.8} height={maxValue}
                                              onMouseEnter={() => {this.showValue(maxValue - y, x)}}
                                              onMouseLeave={() => {this.showValue(null, null)}}
                                />
                                <BottomLine x1={x} y1={y} x2={x} y2={maxValue} />
                                <TopLine x1={x} y1={y} x2={x} y2={0} />
                                <BlueDot x1={x} y1={y} x2={x} y2={y}/>
                                <LightBlueDot x1={x} y1={y} x2={x} y2={y}/>
                            </g>
                        )
                    })}

                </ChartContainer>

                { axisCoordinates.length
                    ? (
                        <AxisLine>
                            { axisCoordinates.map((axis) => {
                                return (
                                    <AxisPoint key={axis.x}>
                                        <AxisValue>{axis.label}</AxisValue>
                                    </AxisPoint>
                                )
                            })}
                        </AxisLine>
                    ) : null
                }

                { this.state.shownValue !== null
                    ? (
                        <Value style={{right: this.state.shownPosition + "%",}}>
                            {this.props.prefix} {formatNumber(this.state.shownValue, this.decimals)} {this.props.postfix}
                        </Value>
                    ) : null
                }

            </Container>
        )
    }

    /**
     * @param value
     * @param position
     */
    showValue(value, position) {

        this.setState({
            shownValue : value,
            shownPosition : 100 - position
        });
    }

    /**
     * @returns {Array}
     */
    formatValuesForLine() {

        if (this.props.values.length < 2) {
            return [];
        }

        let values = [],
            maxValue = Math.max(0, ...this.props.values),
            step = 100 / (this.props.values.length - 1);

        for (let i = 0; i < this.props.values.length; i++) {
            values.push(i*step);
            values.push(Math.min(maxValue, (maxValue - this.props.values[i])));
        }

        return values;
    }

    /**
     *
     * @returns {Array}
     */
    formatCoordinatesForAxis() {

        if (!this.props.axis) {
            return [];
        }

        let values = [],
            step = 100 / (this.props.axis.length - 1);

        for (let i = 0; i < this.props.axis.length; i++) {
            values.push({x: i*step, label: this.props.axis[i]});
        }

        return values;

    }
    /**
     * @returns {Array}
     */
    formatValuesForDots() {

        if (this.props.values.length < 2) {
            return [];
        }

        let values = [],
            maxValue = Math.max(...this.props.values),
            step = 100 / (this.props.values.length - 1);

        for (let i = 0; i < this.props.values.length; i++) {
            values.push([i*step, Math.min(maxValue,maxValue - this.props.values[i])]);
        }

        return values;
    }
}

export default LineChart;
