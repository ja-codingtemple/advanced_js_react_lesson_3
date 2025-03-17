/*
WHAT IS JSON?

JSON stands for JavaScript Object Notation. It is a string format commonly used when sending data.
JSON is not executable code.
JSON does not contain methods.
JSON is structured in key-value pairs. Keys are essentially property names, values are of course values for those properties.

EXAMPLE OF JSON:

{
    "name": "Prancer",
    "breed": "Miniature Schnauzer",
    "furColor": "Salt & Pepper",
    "favorite_activities": {
        "activity_one": "Barking at the TV",
        "activity_two": "Play fighting with Dad"
    }
}

CONVERTING OBJECTS TO JSON:
To convert an object to JSON, you must use the JSON.stringify() method.

CONVERTING JSON BACK TO OBJECTS:
To convert JSON back into an object, you must use the JSON.parse() method.
*/

// Creating a plain JavaScript object.
const dog = {
    name: "Prancer",
    breed: "Miniature Schnauzer",
    furColor: "Salt & Pepper",
    favorite_activities: {
        activity_one: "Barking at the TV",
        activity_two: "Play fighting with Dad"
    }
};

// Print out some of the object properties.
console.log("DISPLAYING PROPERTIES FROM A JAVASCRIPT OJBECT:");
console.log(dog.name);
console.log(dog.favorite_activities);

// Convert the object into a JSON string with stringify()
const json = JSON.stringify(dog);

// Print the JSON string to the console.
console.log(json);

// Convert JSON back into an object.
const dogFromJSON = JSON.parse(json);

// Print out the object properties again.
console.log("\nDISPLAYING PROPERTIES FROM A JAVASCRIPT OBJECT CREATED FROM A JSON STRING:");
console.log(dogFromJSON.name);
console.log(dogFromJSON.favorite_activities);