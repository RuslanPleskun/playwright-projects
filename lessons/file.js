var userName = "Jack";
// Example usage
var numValue;
numValue = 10; // This is allowed
// Example usage
var value;
value = 5; // Valid
value = true; // Valid
value = "string"; // Valid
// Example usage
var values;
values = "Hello"; // Valid
values = "123"; // Valid
values = ""; // Valid
values = 'World'; // Valid
// Example usage
var valuess;
valuess = "Hello"; // Valid
valuess = 123; // Valid
valuess = true; // Valid
var obj = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};
function makeEnemy(stranger) {
    if (stranger instanceof Enemy) {
        return { health: stranger.health, power: stranger.power };
    }
}
var test = makeEnemy({ health: 5, power: 2 });
console.log(test);
