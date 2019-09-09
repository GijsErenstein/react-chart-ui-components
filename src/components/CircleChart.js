import React, { Component } from 'react';
import styled from "styled-components";
import { colors, lightColors, spacings } from 'config/styles.js';


const ChartContainer = styled.svg`
    display : block;
    height: 150px;
    width: 150px;
`;

const CircleBackground = styled.circle`
    stroke-width: 2px;
    fill: none;
    stroke: ${lightColors.interactive};
`;

const CircleValue = styled.circle`
    stroke-width: 2px;
    fill: none;
    stroke: ${colors.interactive};
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: center;
`;

class CircleChart extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let percentage = (this.props.value / this.props.maxValue ) * 100;

        return (
            <ChartContainer viewBox="0 0 33.83098862 33.83098862">
                <CircleBackground
                        cx="16.91549431"
                        cy="16.91549431"
                        r="15.91549431"/>
                <CircleValue
                        strokeDasharray={percentage + ',100'}
                        cx="16.91549431"
                        cy="16.91549431"
                        r="15.91549431"/>
            </ChartContainer>
        )
    }
}

export default CircleChart;