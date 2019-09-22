import React from 'react';
import styled from 'styled-components';
import formatNumber from 'helpers/NumberFormatter';
import { colors, spacings } from 'config/styles';
import PropTypes from 'prop-types';

function CircleChart({
  value = 0,
  maxValue = 0,
  decimals = 2,
  color = colors.interactive,
  metric = '',
  prefix = '',
  postfix = '',
}) {
  const percentage = (value / maxValue) * 100;
  const formattedValue = formatNumber(value, decimals);

  const CircleValue = styled.circle`
            stroke-width: 2px;
            fill: none;
            stroke: ${color};
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
            color: ${color};
            font-family : sans-serif;
            width: 150px;
        `;

  const Metric = styled.div`
            position: absolute;
            display : block;
            text-align: center;
            top: 80px;
            font-size: ${spacings.medium};
            color: ${color};
            font-family : sans-serif;
            width: 150px;
        `;

  const ValueAddition = styled.span`
            font-size: ${spacings.medium};
            color: ${color};
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
            stroke: ${color};
            opacity: 0.2;
        `;


  return (
    <Container>
      <ChartContainer viewBox="0 0 33.83098862 33.83098862">
        <CircleBackground
          cx="16.91549431"
          cy="16.91549431"
          r="15.91549431"
        />
        <CircleValue
          strokeDasharray={`${percentage},100`}
          cx="16.91549431"
          cy="16.91549431"
          r="15.91549431"
        />
      </ChartContainer>
      <Value>
        <ValueAddition>{prefix}</ValueAddition>
        {formattedValue}
        <ValueAddition>{postfix}</ValueAddition>
      </Value>
      <Metric>{metric}</Metric>
    </Container>
  );
}

CircleChart.defaultProps = {
  value: 0,
  maxValue: 0,
  decimals: 2,
  color: colors.interactive,
  metric: '',
  prefix: '',
  postfix: '',
};


CircleChart.propTypes = {
  value: PropTypes.number,
  maxValue: PropTypes.number,
  decimals: PropTypes.number,
  color: PropTypes.string,
  metric: PropTypes.string,
  prefix: PropTypes.string,
  postfix: PropTypes.string,
};

export default CircleChart;
