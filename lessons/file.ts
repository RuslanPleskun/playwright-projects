let userName: string = "Jack";

// let userSurname: string = 555; // cannot assign value which is of a different type, then it is set expicitly

// userName = 100; // cannot re-assign value type which is different from the originally stated one

// Create own type
type CustomType = 5 | 10 | 15; // You can replace 5, 10, 15 with your desired numeric values

// Example usage
let numValue: CustomType;
numValue = 10; // This is allowed
// numValue = 7; // This would result in a type error since 7 is not part of the CustomType


// IF I WANT TO CREATE CUSTOM_TYPE WHICH SHOULD ACCEPT ONLY 3 DIFFERENT VALUES
type CustomTypes = 5 | true | "string";

// Example usage
let value: CustomTypes;

value = 5;      // Valid
value = true;   // Valid
value = "string"; // Valid
// value = 10;    // Error: Type '10' is not assignable to type 'CustomType'
// value = false; // Error: Type 'false' is not assignable to type 'CustomType'
// value = "foo"; // Error: Type '"foo"' is not assignable to type 'CustomType'

// IF I WANT TO CREATE CUSTOM_TYPE WHICH SHOULD ACCEPT ONLY STRING VALUES
type CustomTypess = string;

// Example usage
let values: CustomTypess;

values = "Hello";   // Valid
values = "123";     // Valid
values = "";        // Valid
values = 'World';   // Valid

// Numbers or other types are not allowed:
// value = 42;       // Error: Type '42' is not assignable to type 'CustomType'
// value = true;     // Error: Type 'true' is not assignable to type 'CustomType'

// IF I WANT TO CREATE CUSTOM_TYPE WHICH SHOULD ACCEPT ANY TYPE OF VALUES
type CustomsType = any;

// Example usage
let valuess: CustomsType;

valuess = "Hello";   // Valid
valuess = 123;       // Valid
valuess = true;      // Valid

// IF I WANT TO CREATE CUSTOM_TYPE WHICH SHOULD CONSISTS OF OBJECT
type CustomsTypes = {
  firstName: string,
  lastName: string,
  age: number
};

let obj: CustomsTypes = {
  firstName: "John",
  lastName: "Doe",
  age: 25
};

interface NPC {
  health: number;
}

interface Enemy extends NPC {
  power: number;
}

type Stranger = Enemy | NPC;

function makeEnemy(stranger: Stranger) {
  if(stranger instanceof Enemy) {
    return { health: stranger.health, power: stranger.power }
  }
}

const test = makeEnemy({ health: 5, power: 2});
console.log(test);