# JS Refresher — Quiz

## Modules / Import Export
1. What’s the difference between `export default` and `export { ... }`?
2. Why does `import * as x from './foo.js'` work but `import * from './foo.js'` fail?

## Spread Operator
3. What does `const newArr = [...oldArr]` do?
4. How do you merge arrays with spread?

## Modules / Imports / Exports
5. When importing a module in the browser, why do you sometimes need `<script type="module">`?
6. How do you import a single named export versus the default export? Give examples.
7. How can you rename an import or export (aliasing)? Show a short example.

## Basic JS / Functions
8. What is wrong with calling a function like `fn.hello(name="vatan")` in JavaScript? How should you pass arguments instead?
9. Write a simple function that accepts a `name` and returns `Hello, <name>!`.
10. What’s the difference between a function declaration and a function expression? Provide short examples.

## Running JS code
11. What is the difference between running code in the browser (DevTools console) and running code with Node (`node app.js`)?
12. How does `nodemon` help during development? Show the commands to install and run it locally.

## Data / Variables
13. Given `export {number, source, models, customers}` in `details.js`:
    - How would you import only `customers`?
    - How would you import `number` but name it `qty` locally?
14. What does `const newArr = [...oldArr]` do and why is it useful (mutability / copying)?
