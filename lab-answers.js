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
// const whereIsWaldo = [
//   ["Timmy", "Frank"],
//   "Eggbert",
//   ["Lucinda", "Jacc", "Neff", "Snoop"],
//   ["Petunia", ["Baked Goods", "Waldo"]],
// ];

// multiD = whereIsWaldo.splice(1, 1);
// console.log(multiD);

// multiD1 = whereIsWaldo.flat();
// multiD2 = multiD1.splice(4, 1, "No One");
// console.log(multiD1);

// multiD3 = whereIsWaldo[2][1][1];
// console.log(multiD3);

// Excited Kitten
// const kittyTalk = [
//   "Love me, pet me! HSSSSSS!",
//   "...human... why you taking pictures of me...?",
//   "...the catnip made me do it...",
//   "...why does the red dot always get away...?",
// ];

// for (i = 0; i <= 20; i++) {
//   console.log(kittyTalk[0]);
//   if (i % 2 === 0) {
//     console.log(kittyTalk[Math.floor(Math.random() * (2 - 1 + 1) + 1)]);
//   }
// }

// const nums = [
//   14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
//   17, 12, 71, 18, 15, 12,
// ];
// nums.sort();
// const indexOfMedian = Math.floor(nums.length / 2);
// console.log(nums[indexOfMedian]);

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

// Alien Attire
// let removeItem = kristynsCloset.shift();
// let kristynsShoe = removeItem;
// console.log(kristynsShoe);
// thomsCloset.push(kristynsShoe);
// console.log(thomsCloset);

// Dress Us Up
// let Her = `Kristyn is wearing ${kristynsCloset[1]}, ${kristynsCloset[3]} and ${kristynsCloset[4]}.`;
// let Him = ` While Thom is wearing ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}.`;
// console.log(Her + Him);

// Dirty Laundry
for (i = 0; i <= kristynsCloset.length; i++) {
  console.log("WHIRR: Now washing " + i);
}
