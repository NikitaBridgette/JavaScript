// Basic Syntax //
const add = (a, b) => {
  return a + b;
};

// Arrow Functions Syntax

// shorter //
const add = (a, b) => a + b;

// Single Parameter//
const square = x => x * x;

// No Parameter //
const sayHi = () => console.log('Hi!');

// Returning Objects //

const createUser = (name, age) => ({ name, age });








const add = {
    value: [2,3],
    Add(a,b) {
        console.log(a + b + this.value[0] + this.value[1]);
    }
};

add.Add(5,6); 





