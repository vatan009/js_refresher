# JS Revision Questions

## Modules / Import Export
1. What’s the difference between `export default` and `export { ... }`?
2. Why does `import * as x from './foo.js'` work but `import * from './foo.js'` fail?

## Spread Operator
- What does `const newArr = [...oldArr]` do?
- How do you merge arrays with spread?

## Additional Revision Questions

### Modules 000000000& Imports / Exports
3. When importing a module in the browser, why do you sometimes need `<script type="module">`?
4. How do you import a single named export versus the default export? Give examples.
5. How can you rename an import or export (aliasing)? Show a short example.

### Basic JS / Functions
6. What is wrong with calling a function like `fn.hello(name="vatan")` in JavaScript? How should you pass arguments instead?
7. Write a simple function that accepts a `name` and returns `Hello, <name>!`.
8. What’s the difference between a function declaration and a function expression? Provide short examples.

### Running JS code
9. What is the difference between running code in the browser (DevTools console) and running code with Node (`node app.js`)?
10. How does `nodemon` help during development? Show the commands to install and run it locally.

### Data / Variables
11. Given `export {number, source, models, customers}` in `details.js`:
	- How would you import only `customers`?
	- How would you import `number` but name it `qty` locally?
12. What does `const newArr = [...oldArr]` do and why is it useful (mutability / copying)?

### Quick Practice Prompts
- Import `customers` from `details.js` and `console.log` the second customer.
- Create a `greet(name)` function in `functions/greet.js`, import it in `functions/app.js` and call it with a sample name.

---

If you want, I can also:
- Add answers below each question in the same file (toggleable hints), or
- Generate a printable quiz version with answers on a separate page.
  6
