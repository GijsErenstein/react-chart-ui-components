import { render, getByText } from "@testing-library/react";
import React from "react";
import LineChart from "/components/LineChart";

describe("LineChart", () => {
    test("should render with values", () => {
        const { container } = render(<LineChart values={[1,2,3,4]} />);
    });

    test("should render when empty", () => {
        const { container } = render(<LineChart />);
    });

    // todo: test number formatting

    // todo: test popup rendering

    // todo: test prefix

    // todo: test postfix
});
