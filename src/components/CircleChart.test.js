import { render, getByText } from "@testing-library/react";
import React from "react";
import 'jest-styled-components';

import CircleChart from "/components/CircleChart";

describe("CircleChart", () => {
    test("should render with values", () => {
        const { container } = render(<CircleChart value={10} maxValue={100}  />);
    });

    test("should render when empty", () => {
        const { container } = render(<CircleChart />);
    });

    // todo: test number formatting

    // todo: test percentage

    // todo: test prefix

    // todo: test postfix
});