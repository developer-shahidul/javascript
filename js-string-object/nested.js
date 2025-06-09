const collage = {
  name: "vne",
  class: ["110", "12"],
  event: ["science fair", "bijoy dibosh", "21 february"],
  unique: {
    color: "blue",
    result: {
      marit: "top",
      gpa: 5,
    },
  },
};

// console.log(collage.unique);
// console.log(collage.unique.color);
console.log(collage.unique.result);
collage.unique.result.marit = "top top top most";

console.log(collage.unique.result.marit);

console.log(collage.unique.result.gpa);

// quttetion diya dekte chaile dote dewa jave na
console.log(collage["unique"].result.gpa);

collage.event[1] = "sadinota dibosh";
console.log(collage.event);

// delet
delete collage.name;
console.log(collage);
