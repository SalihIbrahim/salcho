function fruitshop (input){
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let fruitprice ;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        if (fruit === "banana") {
            fruitprice = 2.50;
        }else if (fruit === "apple") {
            fruitprice = 1.20;
        }else if (fruit === "orange") {
            fruitprice = 0.85;
        }else if (fruit === "grapefruit") {
            fruitprice = 1.45;
        }else if (fruit === "kiwi") {
            fruitprice = 2.70;
        }else if (fruit === "pineapple") {
            fruitprice = 5.50;
        }else if (fruit === "grapes") {
            fruitprice = 3.85;
        }else {
            console.log("error");
        }
        break; 

        case "Saturday":
        case "Sunday":
         if (fruit === "banana") {
             fruitprice = 2.70;
         }else if (fruit === "apple") {
             fruitprice = 1.25;
         }else if (fruit === "orange") {
              fruitprice = 0.90;
         }else if (fruit === "grapefruit") {
             fruitprice = 1.60;
         }else if (fruit === "kiwi") {
             fruitprice = 3.00;
         }else if (fruit === "pineapple") {
             fruitprice = 5.60;
         }else if (fruit === "grapes") {
             fruitprice = 4.20;
         }break;
         default:
        console.log("error");
        return
         break;
    } if(fruit === "banana"||fruit === "apple"||fruit === "orange"||fruit === "grapefruit"||fruit === "kiwi"||fruit === "pineapple"||fruit === "grapes" ){
    totalprice = fruitprice * quantity
    console.log(totalprice.toFixed(2));
    }
}
fruitshop (["tomato","Monday","0.5"]);