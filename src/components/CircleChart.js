import React, { Component } from 'react';
import styled from "styled-components";
import formatNumber from "helpers/NumberFormatter";
import { colors, lightColors, spacings } from 'config/styles.js';

const Container = styled.div`
    display : block;
    position: relative;
    height: 150px;
    width: 150px;
`;

const Value = styled.div`
    position: absolute;
    display : block;
    text-align: center;
    top: 40px;
    font-size: ${spacings.large};
    color: ${colors.interactive};
    font-family : sans-serif;
    width: 150px;
`;

const Postfix = styled.div`
    position: absolute;
    display : block;
    text-align: center;
    top: 80px;
    font-size: ${spacings.medium};
    color: ${colors.interactive};
    font-family : sans-serif;
    width: 150px;
`;

const ChartContainer = styled.svg`
    display : block;
    height: 150px;
    width: 150px;
`;

const CircleBackground = styled.circle`
    stroke-width: 2px;
    fill: none;
    stroke: ${colors.interactive};
    opacity: 0.2;
`;

const CircleValue = styled.circle`
    stroke-width: 2px;
    fill: none;
    stroke: ${colors.interactive};
    //stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: center;
`;

class CircleChart extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let initialValue = this.props.value ? this.props.value : 0,
            maxValue = this.props.maxValue ? this.props.maxValue : 0,
            percentage = (initialValue / maxValue ) * 100,
            value = formatNumber(initialValue, this.props.decimals);

        return (
            <Container>
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
                <Value>{this.props.prefix}{value}</Value>
                <Postfix>{this.props.postfix}</Postfix>
            </Container>
        )
    }
}

export default CircleChart;