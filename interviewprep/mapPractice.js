// 1. Create new Map & Add data to it:

// Goal output: Map(3) { 'red' => '#ff0000', 'green' => '#00ff00', 'blue' => '#0000ff}
const colors = new Map();
colors.set('red', '#ff0000');
colors.set('green', '#00ff00');
colors.set('blue', '#0000ff');


console.log('Map Key=>Value Pairs: ', colors);

// 2. Get & Has
console.log('Does this Map have green? ', colors.has('green'));
console.log('Does this Map have purple? ', colors.has('purple'));
console.log('What is the value of Blue? ', colors.get('blue'));

// 3. Update red to a different value
colors.set('red', '#ff5555');

console.log('New Map Key=>Value Pairs: ', colors);

// 4. Delete & Size
colors.delete('green');
console.log(colors.size);

// 5. Looping (keys, values, entries)
for (const key of colors.keys()) {
    console.log(key);
}

for (const value of colors.values()) {
    console.log(value);
}

for (const [key, value] of colors) {
    console.log(key, value);
}

// 6. Counting Items in an array:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCounts = new Map();

for (const fruit of fruits) {
    fruitCounts.set(fruit, (fruitCounts.get(fruit) || 0) + 1);
}
console.log(fruitCounts);

// 7. Using non-string keys:
const user1 = { name: 'Tyler' };
const user2 = { name: 'Lyla' };

const favorites = new Map();
favorites.set('user1', 'red');
favorites.set('user2', 'blue');

console.log(favorites.get('user1'));
console.log(favorites.get({ name: 'bob '})); // Returns undefined because it's a different object in memory. Only the SAME EXACT OBJECT REFERENCE works as the key.

// Difference between line 56 & 57:

// Line 56
const obj = {};
const map = new Map();
map.set(obj, 'hello');
console.log(map); // Map(1) { {} => 'hello } <- kept the object as the key

// Line 57
const normalObj = {};
normalObj[obj] = 'hello';
console.log(normalObj); // { '[object Object]': 'hello' } <- turned the obj into a string key



// 1. ----- Favorite Foods -----

// 1. Create an empty Map called foods✅
// 2. Add three people as keys ('Tyler', 'Lyla', 'Pappy') and their favorite foods as values.✅
// 3. Check if 'Pappy' exists in the Map.✅
// 4. Get Tyler's favorite food.✅
// Goal: .has('Pappy') -> true✅
//      .get('Tyler') -> Tyler's favorite food✅

// 1.
const foods = new Map();

// 2.
foods.set('Tyler', 'Spaghetti');
foods.set('Lyla', 'Chicken Tenders');
foods.set('Pappy', 'Onions Burger');

// 3.
console.log(foods.has('Pappy'));

//4.
console.log(foods.get('Tyler'));

// 2. ----- Update A Scoreboard -----

// 1. Increase Player 1's score by 4.✅
// 2. Increase Player 2's score by 2.✅
// 3. Log the Map✅

const scores = new Map();
scores.set('Player 1', 5);
scores.set('Player 2', 3);
console.log(scores);

// 1.
scores.set('Player 1', 9);

// 2.
scores.set('Player 2', 5);

// 3.
console.log(scores);



// 3. ----- Removing Keys -----

// 1. Create a Map with 4 keys: 'spring', 'summer', 'fall', 'winter', each with any value you want.✅
// 2. Delete 'summer'.✅
// 3. Check the Map's .size.✅

// 1.
const seasons = new Map();
seasons.set('spring', 'flowers');
seasons.set('summer', 'fireflies');
seasons.set('fall', 'leaves');
seasons.set('winter', 'snow');
console.log(seasons);

// 2.
seasons.delete('summer');
console.log(seasons);

// 3.
console.log(seasons.size);



// 4. ----- Loop Practice -----

// 1. Loop through the Map and log only the country names (keys).✅
// 2. Loop again and log only the capital cities (values).✅
// 3. Loop again and log them together.✅

const capitals = new Map();
capitals.set('France', 'Paris');
capitals.set('Japan', 'Tokyo');
capitals.set('Brazil', 'Brasilia');

// 1.
for (const country of capitals.keys()) {
    console.log(country);
}

// 2
for (const capital of capitals.values()) {
    console.log(capital);
}

// 3.
for (const [country, capital] of capitals) {
    console.log(country, capital);
}



// 5. ----- Counting Words -----

// 1. User a Map to count how many times each word appears in an array.✅
// GOAL Outpul: Map(3) { 'apple', 'banana', 'apple', 'orange', 'banana', 'apple' }✅

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitWords = new Map();

for (const fruit of words) {
    fruitWords.set(fruit, (fruitWords.get(fruit) || 0) + 1);
}
console.log(fruitWords);



// 6. ----- Using Objects as Keys -----

// 1. Create two objects.✅
// 2. Create a Map that uses these objects as keys and stores the car's color as the value.✅
// 3. Get the color for obj 1.✅

const obj1 = { name: 'phone' };
const obj2 = { name: 'bowl' };

const objects = new Map();
objects.set(obj1, 'green');
objects.set(obj2, 'purple');

console.log(objects.get(obj1));

// 7. ----- BONUS - Dynamic Updating -----

// 1. Use a Map to keep track of how many of each obj are in the array.✅
// 2. Each time you loop, log the Map so you can see it grow step-by-step.✅

// 1.
const favoritePerson = ['smile', 'eyes', 'smile', 'smile', 'smile', 'eyes', 'intelligence', 'height', 'intelligence', 'eyes', 'heart', 'heart', 'heart'];
const favoriteMap = new Map();

for (const fav of favoritePerson) {
    favoriteMap.set(fav, (favoriteMap.get(fav) || 0) + 1);
    console.log(favoriteMap);
}



// ---------- A Quacking Good Time eCommerce Data ----------

// ----- Stage 1 — Inventory Map (seed data) -----
// Goal: create an inventory Map that tracks stock by duck SKU (or name if you don’t have SKUs yet).
// 1. Make a new file (or a scratch area) and create an empty Map called inventory. ✅
// 2. Add 3 ducks with different starting counts (e.g., 10, 5, 2).✅
// 3. Log the whole Map.✅
// 4. Log the count for exactly one duck using .get().✅
// ----- Checks (what you should see): -----
// a) Map(3) { ... } when you log the Map.✅
// b) A number when you log one duck’s stock (not undefined).✅
// ----- Hints if stuck: -----
// 1) Remember: create the Map first, then call .set(key, value) for each duck.
// 2) If you see undefined, double-check the key spelling.

// 1.
const inventory = new Map();
// 2.
inventory.set('Aerosmith Steven Tyler Squawk This Way Rubber Duck', 10);
inventory.set('Pinball Gizzard (The Who, Roger Daltrey) Rubber Duck', 17);
inventory.set('Lord of the Rings Samwise Rubber Duck', 7);
inventory.set('Lonely Island Rubber Duck', 0);
// 3.
console.log(inventory);
// 4.
console.log(inventory.get('Pinball Gizzard (The Who, Roger Daltrey) Rubber Duck'));

// ----- Stage 2 — addToCart (respect stock) -----
// Goal: write a function that tries to add 1 unit of a duck to the cart only if inventory has at least 1 in stock.
// 1. Create a cart Map (keys = duck, value = quantity in cart).✅
// 2. Write addToCart(duck) that:✅
//      a. Checks if inventory has that duck and stock > 0.✅
//      b. If yes: increment cart quantity by 1 and decrement inventory by 1.✅
//      c. If no: log a friendly “out of stock” message.✅
// 3. Call addToCart a few times (including trying to add something that’s out of stock).✅
// ----- Checks: -----
// 1) After a successful add, cart shows the duck with the right quantity.✅
// 2) Inventory for that duck goes down by the same amount.✅
// 3) Trying to add beyond stock should refuse and not make inventory negative.✅
// ----- Nudges: -----
// To increment a Map value: read current with .get(key) (fallback to 0 if missing), then .set(key, current + 1).
// a) Same trick for decreasing inventory, but subtract.
// b) Tell me: what does cart and inventory print after your test calls?

const cart = new Map();

// const addToCart = (duck) => {
//     if (inventory.has(duck) && inventory.get(duck) > 0) {
//         cart.set(duck, (cart.get(duck) || 0) + 1);
//         inventory.set(duck, inventory.get(duck) - 1);
//         console.log(`${duck} added to cart.`);
//     } else {
//         console.log('Out of Stock');
//     }
// }

// Cleaner way to code for better readability:
const addToCart = (duck) => {
    if (inventory.has(duck) && inventory.get(duck) > 0) {
        const currentQty = cart.get(duck) || 0;
        const nextQty = currentQty + 1;
        cart.set(duck, nextQty);
        inventory.set(duck, inventory.get(duck) - 1);
    } else {
        console.log('Out of Stock.');
    }
}
addToCart('Aerosmith Steven Tyler Squawk This Way Rubber Duck');
addToCart('Aerosmith Steven Tyler Squawk This Way Rubber Duck');
addToCart('Aerosmith Steven Tyler Squawk This Way Rubber Duck');
addToCart('Lonely Island Rubber Duck');

console.log(inventory);
console.log(cart);

// ----- Stage 3 — removeFromCart (put it back) -----
// Goal: if the user removes 1 unit of a duck from the cart, inventory should go up by 1.
// 1. Write removeFromCart(duck) that:✅
//      a. If duck is in cart with qty > 0: decrement cart; increment inventory.✅
//      b. If cart qty hits 0, remove that key from the cart Map (use .delete).
//      c. If it isn’t in the cart, log a message and do nothing.✅
// ----- Checks: -----
// 1) Removing once increases inventory by 1.
// 2) When cart qty drops to 0, cart.has(duck) becomes false.
// ----- Nudges: -----
// a) Use .has() before .get() to avoid undefined.
// b) .delete(key) removes the entry entirely.

const removeFromCart = (duck) => {
    if (cart.has(duck) && cart.get(duck) > 0) {
        const currentQty = cart.get(duck);
        const nextQty = currentQty - 1;
        if (nextQty === 0) {
            cart.delete(duck);
        } else {
            cart.set(duck, nextQty);
        }
        inventory.set(duck, (inventory.get(duck) || 0) + 1);
    } else {
        console.log('Item not in cart.'); 
    }
}

removeFromCart('Aerosmith Steven Tyler Squawk This Way Rubber Duck');
removeFromCart('Aerosmith Steven Tyler Squawk This Way Rubber Duck');
removeFromCart('Aerosmith Steven Tyler Squawk This Way Rubber Duck');

console.log(inventory);
console.log(cart);

// ---------- Store Original Info & Array Values ----------

// given a string containing digits from  2-9, return all permutations of words
// that can be output from the pressed numbers. (as in dial pad phone)

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:

// Input: digits = ""
// Output: []

// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]