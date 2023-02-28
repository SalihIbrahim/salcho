function fishingboat (input){
    let groupBudget = Number(input[0]);
    let season = input[1];
    let fisherNumbers = Number(input[2]);
    let price = 0;
    let difference = 0;

    switch(season){
        case "Spring": price = 3000;
        break;
        case "Summer":
        case "Autumn": 
        price = 4200; break;
        case "Winter":
        price = 2600; break;
    } if (fisherNumbers >= 13) {
        price = price * 0.75
    }
    else if (fisherNumbers >= 11){
        price = price * 0.85
    } else if (fisherNumbers >= 6){
        price = price * 0.9;
    } if (fisherNumbers % 2 === 0){
        if (season !== 'Autumn'){
            price = price * 0.95
        }
    }
    difference = Math.abs(groupBudget - price);
 if (price > groupBudget){
    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
 } else if (groupBudget > price){
    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
 }

}
fishingboat (['2000','Winter','13'])