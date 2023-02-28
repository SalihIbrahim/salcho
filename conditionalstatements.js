function demo(input){
let budget = Number(input[0]);
let season = input[1];
let finalbudget = 0;
let place ;
let placetoStay ;
 if(budget<=100){
    place = "Bulgaria"
    switch (season){
        case "summer":
            placetoStay = "Camp"
            finalbudget = budget * 0.3;
            break;
        case "winter":
            placetoStay = "Hotel"
            finalbudget = budget * 0.7;
            break;
     }
   }else if(budget<=1000){
    place = 'Balkans'
    switch (season){
        case "summer":
            placetoStay = "Camp"
            finalbudget = budget * 0.4;
            break;
        case "winter":
            placetoStay = "Hotel"
            finalbudget = budget * 0.8;
            break;
     }
    }else if(budget>1000){
    place = 'Europe'
    switch (season){
        case "summer":
            placetoStay = "Hotel"
            finalbudget = budget * 0.9;
            break;
        case "winter":
            placetoStay = "Hotel"
            finalbudget = budget * 0.9;
            break;
     }
   }
   console.log(`Somewhere in ${place}`);
   console.log(`${placetoStay} - ${(finalbudget).toFixed(2)}`);
}
demo (["50","summer"]);