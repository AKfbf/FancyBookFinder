import { render, screen } from "@testing-library/react";
import FormField from "../FormField";

describe("Testing FormField component", () => {
  test("Rednder proper form field based on props", () => {
    let type = "text";
    render(<FormField type={type} />);
    let field = screen.getAllByTestId("text-field");
    expect(field).toHaveLength(1);

    type = "select";
    render(<FormField type={type} />);
    field = screen.getAllByTestId("select-field");
    expect(field).toHaveLength(1);

    type = "date";
    render(<FormField type={type} />);
    field = screen.getAllByTestId("date-field");
    expect(field).toHaveLength(1);

    type = "checkbox";
    render(<FormField type={type} />);
    field = screen.getAllByTestId("checkbox-field");
    expect(field).toHaveLength(1);
  });
});
