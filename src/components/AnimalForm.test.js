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
  userEvent.type(speciesInput, "Tiger");
  userEvent.type(ageInput, "3");
  userEvent.type(notesInput, "docile, kind, fat");

  // query for the button
  const button = screen.getByRole("button", { name: /submit/i });

  // click button
  userEvent.click(button);

  // assert
});
