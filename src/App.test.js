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

test("test name", () => {
  // if the test does not throw an error, the test will pass
  throw new Error();
});
