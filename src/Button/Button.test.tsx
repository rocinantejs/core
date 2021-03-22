// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Test Component", () => {

  const renderComponent = () => render(<Button>Click me!</Button>);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveTextContent("Click me!");
  });
});
