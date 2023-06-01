// Easy Going
for (i = 0; i <= 20; i++) {
  console.log(i);
}

// Get Even
for (i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Fizz Buzz
for (i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else console.log(i);
}
