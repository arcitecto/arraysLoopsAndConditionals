// Easy Going
// for (i = 0; i <= 20; i++) {
//   console.log(i);
// }

// Get Even
// for (i = 0; i <= 200; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Fizz Buzz
// for (i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else console.log(i);
// }

// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] += 1;
console.log(plantee[2]);

wolfy[3] = "Gotham City";
console.log(wolfy[3]);

dart.push("Hawkings");
console.log(dart);

wolfy.shift();
wolfy.unshift("GameBoy");
console.log(wolfy);
