# 🚀 Next-Gen JavaScript (ES6+) Cheatsheet

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Status](https://img.shields.io/badge/Status-Learning-blue)
![License](https://img.shields.io/badge/License-MIT-green)

A quick reference guide for **modern JavaScript (ES6+) features** commonly used in modern development and frameworks like React.

---

# 📑 Table of Contents

- [1. let & const](#1-let--const)
- [2. Arrow Functions](#2-arrow-functions)
- [3. Modules (Import / Export)](#3-modules-import--export)
- [4. Classes](#4-classes)
- [5. Spread Operator](#5-spread-operator)
- [6. Rest Operator](#6-rest-operator)
- [7. Destructuring](#7-destructuring)
- [Resources](#resources)

---

# 1. `let` & `const`

Modern JavaScript replaces `var` with **`let`** and **`const`**.

### `let`
Used when the variable **can be reassigned**.

```javascript
let age = 20;
age = 21;
```

### `const`
Used when the variable **should not be reassigned**.

```javascript
const name = "Vatan";
```

### Best Practice

- Use **`const` by default**
- Use **`let` when reassignment is needed**

---

# 2. Arrow Functions

Arrow functions provide **shorter syntax** and **better `this` handling**.

### Normal Function

```javascript
function greet(name) {
  console.log(name);
}
```

### Arrow Function

```javascript
const greet = (name) => {
  console.log(name);
};
```

### No Parameters

```javascript
const greet = () => {
  console.log("Hello");
};
```

### Single Parameter

```javascript
const greet = name => {
  console.log(name);
};
```

### Implicit Return

```javascript
const square = num => num * num;
```

---

# 3. Modules (Import / Export)

JavaScript modules help split code into **multiple files**.

### Default Export

```javascript
export default person;
```

Import:

```javascript
import person from "./person.js";
```

You can use **any name** when importing default exports.

### Named Export

```javascript
export const age = 25;
```

Import:

```javascript
import { age } from "./person.js";
```

### Import Everything

```javascript
import * as data from "./person.js";

console.log(data.age);
```

---

# 4. Classes

Classes provide **object blueprints**.

### Basic Class

```javascript
class Person {
  name = "Max";
}

const person = new Person();
console.log(person.name);
```

### Class Method

```javascript
class Person {
  name = "Max";

  printMyName() {
    console.log(this.name);
  }
}
```

### Arrow Function Method

```javascript
class Person {
  name = "Max";

  printMyName = () => {
    console.log(this.name);
  };
}
```

Arrow functions keep the **correct `this` context**.

### Inheritance

```javascript
class Human {
  species = "human";
}

class Person extends Human {
  name = "Max";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();

console.log(person.species);
```

---

# 5. Spread Operator `...`

Used to **expand arrays or objects**.

### Array Example

```javascript
const numbers = [1,2,3];

const newNumbers = [...numbers,4,5];

console.log(newNumbers);
```

Output:

```
[1,2,3,4,5]
```

### Object Example

```javascript
const user = {
  name: "Max"
};

const updatedUser = {
  ...user,
  age: 28
};
```

Result:

```javascript
{
  name: "Max",
  age: 28
}
```

---

# 6. Rest Operator `...`

Collects multiple arguments into **one array**.

```javascript
function sum(...numbers) {
  return numbers.reduce((a,b) => a + b);
}

sum(1,2,3,4);
```

---

# 7. Destructuring

Extract values from arrays or objects easily.

### Array Destructuring

```javascript
const numbers = [1,2,3];

const [a,b] = numbers;

console.log(a); // 1
console.log(b); // 2
```

### Object Destructuring

```javascript
const person = {
  name: "Max",
  age: 28
};

const { name } = person;

console.log(name);
```

### Destructuring in Function Parameters

Instead of:

```javascript
const printName = (person) => {
  console.log(person.name);
};
```

Use:

```javascript
const printName = ({name}) => {
  console.log(name);
};
```

---

# 📚 Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

---

# ⭐ Key Takeaways

Modern JavaScript relies heavily on:

- `let` and `const`
- Arrow Functions
- Modules (`import` / `export`)
- Classes and Inheritance
- Spread & Rest Operators
- Destructuring

