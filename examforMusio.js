function kittens(input){
    let catCount = Number(input[0]);
    let totalFood = 0;
    let cat1Count = 0;
    let cat2Count = 0;
    let cat3Count = 0;
   
    for (let i = 1; i <= catCount; i++) {
         let foodGrams = Number(input[i]);
         totalFood = totalFood + foodGrams;

         if (foodGrams >= 100 && foodGrams < 200){
            cat1Count++;
         }else if (foodGrams >= 200 && foodGrams < 300){
            cat2Count++;
         }else if(foodGrams >= 300 && foodGrams < 400){
            cat3Count++;
         }
    }
    let totalPriceForFood = totalFood * (12.45/1000)
   console.log(`Group 1: ${cat1Count} cats.`);
   console.log(`Group 2: ${cat2Count} cats.`);
   console.log(`Group 3: ${cat3Count} cats.`);
   console.log(`Price for food per day: ${totalPriceForFood.toFixed(2)} lv.`);
}
kittens(["7","100","200","342","300","234","123","212"]);