function demo (input){
let month = input [0];
let numberOfNights = Number(input[1]);
let priceForApartment ;
let priceForStudio ;
    switch(month){
        case "May":
        case "October":
             priceForApartment = 65;
             priceForStudio = 50;
             if (numberOfNights > 7) {
                priceForStudio = priceForStudio * 0.95
             }else if(numberOfNights > 14){
                priceForStudio = priceForStudio * 0.7
             }
             break;
        case "June":
        case "September":
             priceForStudio = 75.20;
             priceForApartment = 68.70;
             if (numberOfNights > 14) {
                priceForStudio = priceForStudio * 0.8
             }
             break;
        case "July":
        case "August":
             priceForStudio = 76;
             priceForApartment = 77;
             break;
    }
    if (numberOfNights > 14) {
        priceForApartment = priceForApartment * 0.9
     }
      finalPriceforApartment = priceForApartment * numberOfNights
      finalPriceforStudio = priceForStudio * numberOfNights
     console.log(`Apartment: ${finalPriceforApartment.toFixed(2)} lv.`);
     console.log(`Studio: ${finalPriceforStudio.toFixed(2)} lv.`);
     
     }
     demo(["May","15"]);
     