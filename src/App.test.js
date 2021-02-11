import React from "React";
import { render } from "@testing-library/react";
import App from "./App";

test("Header is rendered", () => {
  // Arrange
  // Render the App component
  const container = render(<App />);
  container.debug();

  // Act
  // query the DOM for the header element

  // Assert
  // Is the header found on the DOM?
});

// Testing gives us confidence in our code

/**
 *  3 main types of tests
 *
 *  1. end-to-end tests (cypress)
 *      Run your project in an actual brower. Run as many user scenarios as possible.
 *      Take a long time to run, and take a lot of computing power :(
 *  2. integration tests (React Testing Library, Enzyme)
 *      Test how different pieces of your code work (integrate) together
 *  3. unit tests (jest)
 *      test a single unit of code to make sure it always runs correctly under
 *      many different scenarios
 */

// jest - test runner
//      - used for assertions (global functions)
//      - uses global functions to structure our tests
//           - test, describe, it
// test("test name", () => {
//   // if the test does not throw an error, the test will pass
//   // throw new Error("This test broke because of X, Y, Z"); // we will not throw errors in our tests... that is built into RTL
// });

// describe("testing", () => {
//   it("should pass all the tests", () => {
//     console.log("it passed!");
//   });
// });
