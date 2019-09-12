import React, { Component } from 'react';
import styled from "styled-components";
import formatNumber from "helpers/NumberFormatter";
import { colors, spacings } from 'config/styles';

class CircleChart extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let initialValue = this.props.value ? this.props.value : 0,
            maxValue = this.props.maxValue ? this.props.maxValue : 0,
            percentage = (initialValue / maxValue ) * 100,
            value = formatNumber(initialValue, this.props.decimals);

        let uiColor = this.props.color ? this.props.color : colors.interactive;

        const CircleValue = styled.circle`
            stroke-width: 2px;
            fill: none;
            stroke: ${uiColor};
            //stroke-linecap: round;
            transform: rotate(-90deg);
            transform-origin: center;
        `;

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
            color: ${uiColor};
            font-family : sans-serif;
            width: 150px;
        `;

        const Metric = styled.div`
            position: absolute;
            display : block;
            text-align: center;
            top: 80px;
            font-size: ${spacings.medium};
            color: ${uiColor};
            font-family : sans-serif;
            width: 150px;
        `;

        const ValueAddition = styled.span`
            font-size: ${spacings.medium};
            color: ${uiColor};
            font-family : sans-serif;
        `;

        const ChartContainer = styled.svg`
            display : block;
            height: 150px;
            width: 150px;
        `;


        const CircleBackground = styled.circle`
            stroke-width: 2px;
            fill: none;
            stroke: ${uiColor};
            opacity: 0.2;
        `;


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
                <Value>
                    <ValueAddition>{this.props.prefix}</ValueAddition>
                    {value}
                    <ValueAddition>{this.props.postfix}</ValueAddition>
                </Value>
                <Metric>{this.props.metric}</Metric>
            </Container>
        )
    }
}

export default CircleChart;