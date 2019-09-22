import { render } from '@testing-library/react';
import React from 'react';
import LineChart from '/components/LineChart';

describe('LineChart', () => {
  test('should render with values', () => {
    render(<LineChart values={[1, 2, 3, 4]} />);
  });

  test('should render when empty', () => {
    render(<LineChart />);
  });

  // todo: test number formatting

  // todo: test popup rendering

  // todo: test prefix

  // todo: test postfix
});
