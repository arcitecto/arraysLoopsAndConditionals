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
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// plantee[2] += 1;
// console.log(plantee[2]);

// wolfy[3] = "Gotham City";
// console.log(wolfy[3]);

// dart.push("Hawkings");
// console.log(dart);

// wolfy.shift();
// wolfy.unshift("GameBoy");
// console.log(wolfy);

// Yell at the Ninja Turtles
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (let x of ninjaTurtles) {
//   console.log(x.toUpperCase());
// }

// const favMovies = [
//   "Jaws",
//   "The Fellowship of the Ring",
//   "Howl's Moving Castle",
//   "Django Unchained",
//   "Cloud Atlas",
//   "The Usual Suspects",
//   "Toy Story",
//   "Conan the Barbarian",
//   "Titanic",
//   "Harry Potter",
//   "Fried Green Tomatoes",
//   "Volver",
//   "Oculus",
//   "Seven",
//   "Black Panther",
//   "Harry Potter",
//   "Imitation of Life",
//   "Snatch",
//   "Fast and Furious",
// ];

// index = favMovies.indexOf("Titanic");
// console.log(index);

// index1 = favMovies.sort();
// console.log(index1);

// favMovies.pop();
// console.log(favMovies);

// favMovies.push("Guardians of the Galaxy");
// console.log(favMovies);

// index2 = favMovies.reverse();
// console.log(index2);

// index3 = favMovies.shift();
// console.log(index3);

// index4 = favMovies.unshift();
// console.log(index4);

// index5 = favMovies.splice(14, 1, "Avatar");
// console.log(index5);

// index6 = favMovies.slice(9);
// console.log(index6);

// console.log(favMovies);

// console.log(favMovies.indexOf("Fast and Furious"));

// Where is Waldo
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

multiD = whereIsWaldo.splice(1, 1);
console.log(multiD);

multiD1 = whereIsWaldo.flat();
multiD2 = multiD1.splice(4, 1, "No One");
console.log(multiD1);

multiD3 = whereIsWaldo[2][1][1];
console.log(multiD3);
