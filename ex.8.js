function demo(input){
let price = 0;
let fruit = (input[0]);    
let day = (input[1]);
let quantity =(input[2]);
   if(day === "Tuesday"||"Monday"||"Wednesday"||"Thursday"||"Friday"){
    if (fruit == "apple")
        price = (quantity * 1.20).toFixed(2);
        console.log(price);
}
 else if(day === "Tuesday"||"Monday"||"Wednesday"||"Thursday"||"Friday"){
   if (fruit == "banana"){
        price = (quantity * 2.50).toFixed(2);
        console.log(price);
    }
}
else if(day === "Tuesday"||"Monday"||"Wednesday"||"Thursday"||"Friday"){
    if (fruit == "orange"){
        price = (quantity * 0.85).toFixed(2);
        console.log(price);
    }
}
if(day === "Tuesday"||"Monday"||"Wednesday"||"Thursday"||"Friday"){
    if (fruit == "grapefruit"){
        price = (quantity * 1.45).toFixed(2);
        console.log(price);
    }
}
else if(day === "Tuesday"||"Monday"||"Wednesday"||"Thursday"||"Friday"){
    if (fruit == "kiwi"){
        price = (quantity * 2.70).toFixed(2);
        console.log(price);
    }
}
else if(day === "Tuesday"||"Monday"||"Wednesday"||"Thursday"||"Friday"){
    if (fruit == "pineapple"){
        price = (quantity * 5.50).toFixed(2);
        console.log(price);
    }
}
else if(day === "Tuesday"||"Monday"||"Wednesday"||"Thursday"||"Friday"){
    if (fruit == "grapes"){
        price = (quantity * 3.85).toFixed(2);
        console.log(price);
    }
}
else if(day === "Saturday"||"Sunday" && fruit ==="apple"){
        price = (quantity * 1.25).toFixed(2);
        console.log(price);
} 
else if (day === "Saturday"||"Sunday" && fruit ==="banana"){
        price = (quantity * 2.70).toFixed(2);
        console.log(price);
}
else if(day === "Saturday"||"Sunday" && fruit ==="orange"){
        price = (quantity * 0.90).toFixed(2);
        console.log(price);
}
else if(day === "Saturday"||"Sunday" && fruit ==="grapefruit"){
        price = (quantity * 1.60).toFixed(2);
        console.log(price);
}
else if(day === "Saturday"||"Sunday" && fruit === "kiwi"){
        price = (quantity * 3.00).toFixed(2);
        console.log(price);
}
else if(day === "Saturday"||"Sunday" && fruit === "pineapple"){
        price = (quantity * 5.60).toFixed(2);
        console.log(price);
}
else if(day === "Saturday"|| day ==="Sunday"){
    if (fruit === "grapes")
        price = (quantity * 4.20);
}
        console.log(price.toFixed(2));
}
demo (["grapes","Sunday","2"])