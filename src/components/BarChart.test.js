import { render, getByText } from "@testing-library/react";
import React from "react";
import BarChart from "/components/BarChart";

describe("BarChart", () => {
    test("should render with values", () => {
        const { container } = render(<BarChart decimals={2}
                                               prefix={'€'}
                                               postfix={'per user'}
                                               rounded={true}
                                               values={[{
                                                   label: 'Small',
                                                   value: 10,
                                                   color: '#8338EC'
                                               }, {
                                                   label : 'Medium',
                                                   value : 13,
                                                   color: '#FF006E'
                                               }, {
                                                   label : 'Large',
                                                   value : 19,
                                                   color: '#FFBE0B'
                                               }]} />);
    });

    test("should render when empty", () => {
        const { container } = render(<BarChart />);
    });

    // todo: test number formatting

    // todo: test popup rendering

    // todo: test prefix

    // todo: test postfix
});