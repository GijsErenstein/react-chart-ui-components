import React, { Component } from 'react';
import { colors, lightColors, spacings } from 'config/styles.js';
import { PopIn } from 'config/Keyframes.js';
import formatNumber from "helpers/NumberFormatter";
import ColorChanger from 'helpers/ColorChanger';
import styled from "styled-components";
import {maxWidth} from "react-styleguidist/lib/client/styles/theme";

class BarChart extends Component {

    constructor(props) {
        super(props);


        // this.showValue = this.showValue.bind(this);

        // this.state = {
        //     shownValue : 0,
        //     shownPosition: 1,
        // }
    }

    render() {

        const { decimals = 2,
            color = colors.interactive,
            rounded = false,
            values = [],
            axis = [],
            prefix = null,
            postfix = null,
            ...restProps
        } = this.props;

        // create colors
        let darkerColor = ColorChanger.darkenColor(color, 0.2),
            lighterColor = ColorChanger.lightenColor(color, 0.1),
            contrastColor = ColorChanger.getBlackOrWhiteContrastColor(color);

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

        // const BlueDot = styled.line`
        //   stroke-width : 6px;
        //   stroke: ${color};
        //   transition: stroke-width 300ms;
        //   pointer-events : none;
        //   vector-effect: non-scaling-stroke;
        //   stroke-linecap: round;
        //
        //   ${HoverElement}:hover ~ & {
        //     stroke-width : 10px;
        //   }
        // `;
        //
        // const LightBlueDot = styled.line`
        //   stroke-width : 0;
        //   stroke: ${lighterColor};
        //   transition: stroke-width 300ms, stroke 300ms;
        //   pointer-events : none;
        //   vector-effect: non-scaling-stroke;
        //   stroke-linecap: round;
        //
        //   ${HoverElement}:hover ~ & {
        //     stroke-width : 6px;
        //   }
        // `;

        // const TopLine = styled.line`
        //   stroke-width : 2px;
        //   stroke: ${color};
        //   opacity: 0.2;
        //   vector-effect: non-scaling-stroke;
        //   pointer-events : none;
        // `;

        const BottomLine = styled.line`
          stroke-width : 50px;
          stroke: ${color};
          pointer-events : none;
          vector-effect: non-scaling-stroke;
          transition: stroke-width 100ms;

          // ${HoverElement}:hover ~ & {
          //   stroke-width : 2px;
          //   stroke: ${color}; 
          // }
        `;

        // const AxisLine = styled.div`
        //   display: flex;
        //   flex-flow: row nowrap;
        //   border-top : 2px solid ${darkerColor};
        // `;
        //
        // const AxisPoint = styled.div`
        //   flex: 1 1 auto;
        //   border-left : 2px solid ${darkerColor};
        //   pointer-events : none;
        //   overflow: visible;
        //   position: relative;
        //   height: 10px;
        //
        //   &:last-child {
        //     width: 0;
        //     flex: 0 0 0;
        //   }
        // `;

        // const AxisValue = styled.div`
        //   top: 12px;
        //   left: 0;
        //   position: absolute;
        //   color : ${darkerColor};
        //   font-family : sans-serif;
        //   font-size : 12px;
        //   font-weight: lighter;
        //   text-align: center;
        //   min-width: 100px;
        //   transform:translate(-50%,0);
        //
        //   ${AxisPoint}:last-child & {
        //     text-align: right;
        //     transform:translate(-100%,0);
        //   }
        //
        //   ${AxisPoint}:first-child & {
        //     text-align: left;
        //     transform:translate(0,0);
        //   }
        // `;

        // const Value = styled.span`
        //   display: inline-block;
        //   font-size : 12px;
        //   color : ${contrastColor};
        //   font-family : sans-serif;
        //   font-weight: lighter;
        //   position: absolute;
        //   top: 12px;
        //   transform: translate(50%,-${spacings.small});
        //   background: ${color};
        //   padding: ${spacings.tiny} ${spacings.small};
        //   border-radius: ${spacings.tiny};
        //   opacity: 0;
        //   transition: opacity 200ms;
        //
        //   animation: ${PopIn} 200ms ease-out;
        //
        //   &:not(:empty) {
        //     opacity: 1;
        //
        //     &:after {
        //         content: '';
        //         position: absolute;
        //         top: 100%;
        //         left: 50%;
        //         border-left: 4px solid transparent;
        //         border-right: 4px solid transparent;
        //         border-top: 4px solid ${color};
        //         transform: translate(-50%, 0);
        //     }
        //   }
        // `;


        // Calculate svg coordinates
        let valuesArray = values.map((value) => {
            return parseFloat(value.value)
        });

        let maxValue = Math.max(...valuesArray),
            dotCoordinates = this.formatCoordinatesAsPair(values),
            hoverWidth = 100 / (dotCoordinates.length - 1),
            lastX = 100 - hoverWidth
        ;

        console.log(maxValue);
        console.log(hoverWidth);
        console.log(dotCoordinates);


        return (
            <Container>
                <ChartContainer preserveAspectRatio={"none"} viewBox={"0 0 100 " + maxValue}>

                    { dotCoordinates.map((bar) => {

                        console.log(bar);
                        return (
                            <g key={bar.x}>
                                <HoverElement x={bar.x }
                                              y={0}
                                              width={hoverWidth}
                                              height={maxValue}
                                              style={{fill: bar.color}}
                                />
                                {/*<BottomLine style={{stroke: bar.color}} x1={bar.x} y1={bar.y} x2={bar.x} y2={maxValue} />*/}
                            </g>
                        )
                    })}

                </ChartContainer>

                {/*{ axisCoordinates.length*/}
                {/*    ? (*/}
                {/*        <AxisLine>*/}
                {/*            { axisCoordinates.map((axis) => {*/}
                {/*                return (*/}
                {/*                    <AxisPoint key={axis.x}>*/}
                {/*                        <AxisValue>{axis.label}</AxisValue>*/}
                {/*                    </AxisPoint>*/}
                {/*                )*/}
                {/*            })}*/}
                {/*        </AxisLine>*/}
                {/*    ) : null*/}
                {/*}*/}

                {/*{ this.state.shownValue !== null*/}
                {/*    ? (*/}
                {/*        <Value style={{right: this.state.shownPosition + "%",}}>*/}
                {/*            {prefix} {formatNumber(this.state.shownValue, decimals)} {postfix}*/}
                {/*        </Value>*/}
                {/*    ) : null*/}
                {/*}*/}

            </Container>
        )
    }

    // /**
    //  * @param value
    //  * @param position
    //  */
    // showValue(value, position) {
    //
    //     this.setState({
    //         shownValue : value,
    //         shownPosition : 100 - position
    //     });
    // }

    /**
     * @returns {Array}
     */
    formatCoordinatesAsPair(values = []) {

        if (values.length < 2) {
            return [];
        }

        let valuesOnly = values.map(value => value.value);

        let coordinates = [],
            maxValue = Math.max(0, ...valuesOnly),
            step = 100 / (values.length - 1);

        for (let i = 0; i < values.length; i++) {
            coordinates.push({
                x: i*step,
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


        let values = [],
            step = 100 / (axis.length - 1);

        for (let i = 0; i < axis.length; i++) {
            values.push({x: i*step, label: axis[i]});
        }

        return values;

    }

}

export default BarChart;
