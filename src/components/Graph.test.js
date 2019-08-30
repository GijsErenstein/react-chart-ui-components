import { render, getByText } from "@testing-library/react";
import React from "react";
import Graph from "/components/Graph";

describe("Graph", () => {
    test("should render with values", () => {
        const { container } = render(<Graph values={[1,2,3,4]} />);
    });

    test("should render when empty", () => {
        const { container } = render(<Graph />);
    });
});