import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AnimalForm from "./AnimalForm";

test("renders without errors", () => {
  render(<AnimalForm />);
});

test("form is filled out and submit adds new animal", () => {
  // render
  render(<AnimalForm />);
  // query for all inputs
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);

  // type into inputs

  // query for the button

  // click button

  // assert
});
