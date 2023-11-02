// creating map
let storage = new Map();

// insert value in the map
storage.set("bottle",4);
storage.set("scarf metal",35);
storage.set("pine log",54);
storage.set("roof",33);

// check is key exist inside the map
console.log(storage.has("plank")); // false

// delete from map
storage.delete("roof");

console.log(storage); 
// Map(3) { 'bottle' => 4, 'scarf metal' => 35, 'pine log' => 54 }

// size of the map
console.log(storage.size); // 3

// using loop on map
for(let [key,value] of storage.entries()){
    console.log(`${key} : ${value}`);
}
/**
bottle : 4
scarf metal : 35
pine log : 54
*/


// clear the map
storage.clear();
console.log(storage); // Map(0) {}
