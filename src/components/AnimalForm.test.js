import React from "react";
import { render, screen } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test("renders without errors", () => {
  render(<AnimalForm />);
});

test("form is filled out and submit adds new animal", () => {
  // render
  render(<AnimalForm />);
  // query for all inputs
  screen.getByLabelText(/species/i);

  // type into inputs

  // query for the button

  // click button

  // assert
});
