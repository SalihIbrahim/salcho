function foodForAnimals(input){
let dayNumber = Number(input[0]);
let foodQuantity = Number(input[1]);
let totalEatenFood = 0;

for (let i = 2; i < input.length; i+=2) {
    let foodEatenFromDog = Number(input[i]);
    let foodEatenFromCat = Number(input[i + 1]);
    totalEatenFood = foodEatenFromCat + foodEatenFromDog;
   
}

}
foodForAnimals(["3","1000","300","20","100","30","110","40"]);