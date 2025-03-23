
## Manual Testing
- Interacting with websites and ensuring everything functions properly can be time-consuming. After implementing a new change or fix, testing the entire app again becomes a lengthy and tedious process.

## Automated Testing

## Types Of Testing [As a Developer]
- Unit Testing
- Integration Testing
 - When multiple components are integrated or need to communicate with each other, the workflow and functionality must perform as expected.
- End to End Testing [E2E Testing]
 - Similar to system testing, this process evaluates the entire application, focusing on how a user interacts with and navigates through the entire website. [Example: Online Shopping Website - Please make an order and payment]

## React Testing Library | JEST Library - Configuration
- npm install --save-dev @testing-library/react @testing-library/dom
- npm install --save-dev jest
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- create a `babel.config.js` and copy/paste necessary code from jest
- create a `.parcelrc` and copy/paste necessary code from parcel
- JEST configuration - npx jest --init [Since our app runs based on parcel, used npx]
 - √ Would you like to use Typescript for the configuration file? ... no
 - √ Choose the test environment that will be used for testing » jsdom (browser-like)
 - √ Do you want Jest to add coverage reports? ... yes
 - √ Which provider should be used to instrument code for coverage? » babel
 - √ Automatically clear mock calls, instances, contexts and results before every test? ... yes
- If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.
 - npm install --save-dev jest-environment-jsdom [https://testing-library.com/docs/react-testing-library/setup#jest-28]
- npm install -D @babel/preset-react [To use jsx extension]
 -  After that include the following in the babel.config.js - `["@babel/preset-react", {runtime: "automatic" }]`
- npm install --save-dev @testing-library/jest-dom [...]
- npm i -D jest-fixed-jsdom - then include the following: testEnvironment: "jest-fixed-jsdom" in `jest.config.js`
 - `To fix the Reference Error : TextEncoder / TextDecoder is not defined`

## Screen Object from RTL
1. getByAltText
2. getByDisplayValue
3. getByLabelText
4. getByPlaceholderText
### 5. getByRole(aria-role attribute value, options)
- An ARIA role is an attribute that describes the purpose or behavior of an element.
- By default, getByRole only returns visible elements. If you want to also get hidden elements, set { hidden: true } in options.
- Other Role Examples:
 - "button" for <button> elements.
 - "textbox" for <input> elements of type text.
 - "link" for <a> tags.
 - "heading" for headings (can specify level as an option, e.g., level: 1 for <h1>).
 - "checkbox" for <input type="checkbox">.
6. getByText
7. getByTitle
8. getByTestId

- describe()
- test() | it()
- render() | screen () | act()
- beforeAll(()=>{}) | beforeEach(()=>{})
- afterAll(()=>{}) | afterEach(()=>{})

## Questions
1. Can you provide a list of the different types of testing in general? Also, what types of testing can be performed with React?
2. Should the entire app and their functionality be tested whenever a new feature or minor changes are added to the existing app?
3. Can a single line of code crash the entire application if the components are interconnected?
4. What is jsdom (browser-like environment), and why is it needed?
5. What are dunder methods?
6. What is assertion?
7. What are test suites and tests as a result after executing test cases?
8. output of the following:
    test("Check three input boxes are there!", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes) # It returns React Elements / JSX Elements
    });

## Timeline
00.00.00 - Part 1 - Testing Introduction
00.16.45 - Part 2 - Chit Chat
00.25.00 - React Testing Library set-up
00.41.35 - JEST Configuration
01.10.05 - Writing a testcase for react application
01.35.00 - Write a testcase to check whether we have button or not
01.55.00 - Part 4
02.02.30 - Part 5 Adding coverage inside gitignore file.
02.04.00 - Part 6 Unit Testing of Header Component
02.27.35 - Part 7
02.41.00 - Part 8 Integration Testing
03.27.00 - Part 9