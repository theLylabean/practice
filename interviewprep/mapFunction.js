const scores = new Map();
console.log(scores); // Map(0) {}

// Adding Data: .set(key, value)
scores.set('Tyler', 90);
scores.set('Lyla', 85);
console.log(scores); // Map(2) { 'Tyler => 90, 'Lyla' => 85 }

// Retrieving Data: .get(key)
console.log(scores.get('Tyler')); // 90
console.log(scores.get('Leelo')); // undefined (not found)

// Checking if a key ecists: .has(key)
console.log(scores.has('Lyla'));  // true
console.log(scores.has('Eve'));  // false

// Removing Data: .delete(key)
scores.delete('Lyla');
console.log(scores.has('Lyla')); // false

// Counting Entries: .size
console.log(scores.size); // 1

// Clear Everything: .clear()
scores.clear();
console.log(scores.size); // 0
console.log(scores.has()); // will always return fasle because it needs an argument otherwise it returns undefined and nothing in the Map is stored under the undefined key

// Iterating Over A Map

scores.set('Tyler', 90);
scores.set('Lyla', 85);

// 1. Looping (key, value) pairs
for (const [name, score] of scores) {
    console.log(name, score); // Tyler 90 Lyla 85
}

// 2. Looping just the keys
for (const name of scores.keys()) {
    console.log(name); // Tyler Lyla
}

// 3. Looping just the values
for (const score of scores.values()) {
    console.log(score); // 90 85
}

// 4. Loops using forEach
scores.forEach((score, name) => {
    console.log(`${name} scored ${score}`); // Tyler scored 90 Lyla scored 85
});

// Example: Counting Items

// Input list: array
const animals = ['cat', 'dog', 'dog', 'fish', 'cat'];

// Creates an empty Map
const counts = new Map();

// Loop over each animal
for (const animal of animals) { // This will run once for each element in aminals ( 1st -> 'cat', 2nd -> dog, etc.)

    // Inside the loop: Setting key (animal) and value (newCount)
    counts.set(animal, (counts.get(animal) || 0) + 1); // if .get(0) returned undefined (first time we see this animal(cat)), we use 0 instead because undefined \\ 0 evaluates to 0. +1 -> adds one to the count because we've just seen another of this animal(cat). now counts.set looks like this -> counts.set(animal, newCount) and saves the updated count back into the Map.
}

console.log(counts);
