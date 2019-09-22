import { render, getByText } from '@testing-library/react';
import React from 'react';
import 'jest-styled-components';

import CircleChart from '/components/CircleChart';

describe('CircleChart', () => {
  test('should render with values', () => {
    render(<CircleChart value={10} maxValue={100} />);
  });

  test('should render when empty', () => {
    render(<CircleChart />);
  });

  // todo: test percentage

  test('should display the prefix', () => {
    const { container } = render(<CircleChart value={10} maxValue={100} prefix="smiles" />);

    getByText(container, 'smiles');
  });

  test('should display the number correctly', () => {
    const { container } = render(<CircleChart value={12000.4} maxValue={20000} decimals={2} />);

    getByText(container, '12,000.40');
  });

  test('should display the metric', () => {
    const { container } = render(<CircleChart value={10} maxValue={100} metric="Kaas" />);

    getByText(container, 'Kaas');
  });

  test('should display the postfix', () => {
    const { container } = render(<CircleChart value={10} maxValue={100} postfix="per user" />);

    getByText(container, 'per user');
  });
});
