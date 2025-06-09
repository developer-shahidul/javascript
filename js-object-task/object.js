// ### Task-1
// Access the `golden rod` color value in output.

const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};
console.log(colors["golden rod"]);

// ---
// ### Task-2
// For this object below add a property named `passenger capacity` with value 5
// ```js
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car["passenger capacity"] = 5;
console.log(car);

// ```
// ---
// ### Task-3
// Display the physics marks as output.
// ```js
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};

console.log(student["physics"]["marks"]);
console.log(student.physics.marks);
console.log(student.physics["marks"]);
console.log(student["physics"].marks);
console.log(student.physics?.marks);

// ✅ 4. Destructuring (সহজভাবে ভেতরের ডাটা আলাদা করে নেওয়া)
const { marks } = student.physics;
console.log(marks);
// ```
// Dot notation     	obj.key.subkey       	সাধারণ ক্ষেত্রে
// Bracket notation  	obj["key"]["subkey"]	key-তে স্পেস থাকলে / ডাইনামিক key হলে
// Mixed notation	    obj["key"].subkey	    ব্র্যাকেট ও ডট একসাথে
// Destructuring	    const { x } = obj	   নির্দিষ্ট property সরাসরি নিতে
// Optional chaining	obj?.key?.subkey	    key না থাকলে error না দিয়ে undefined
// Variable as key	    obj[var1][var2]
// 	যখন key dynamic / input থেকে আসে
// // ---

// ### Task-4

// Count the `number of properties`.

// **Input:**
// <br>
// ```js
let Student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
console.log(Object.keys(Student).length);

const totalprops = Object.keys(Student).length;
console.log("totalprops : ", totalprops);

const props = Object.entries(Student).length;
console.log("props : ", props);

// for
let count = 0;
for (let prop in Student) {
  count++;
}
console.log("prop : ", count);

// ✅ 4. Reflect.ownKeys() (Advanced ও Rare)
const total = Reflect.ownKeys(Student).length;
console.log("Total properties:", total);
// ```
// **Output:**

// <br>

//     4

// ---
// ### Task-5 (Hard)

// Loop through an object and print the key-value pairs with their `types`

// **Input:**
// <br>

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

// **Output:**

// <br>

//     key: name | type:  string
//     key: age | type:  number
//     key: city | type:  string
//     key: isStudent | type:  boolean

// for
//  myObject[key] মানে হলো → myObject["name"] → যা return করবে "John Doe"।
for (let key in myObject) {
  const value = myObject[key];
  console.log("key:", key, "| types:", value);
}
