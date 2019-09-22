import { render, getByText, fireEvent } from '@testing-library/react';
import React from 'react';
import Button from 'components/Button';

describe('Button', () => {
  test('should display text', () => {
    const { container } = render(
      React.createElement(Button, { text: 'We Salute You!' }),
    );

    getByText(container, 'We Salute You!');
  });

  test('should handle click events', () => {
    const onClickMock = jest.fn();
    const { container } = render(
      React.createElement(Button, { onClick: onClickMock }),
    );

    const component = container.firstChild;

    fireEvent.click(component);

    expect(onClickMock).toBeCalled();
  });
});
