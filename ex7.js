function demo(input){
    let month = input [0];
    let numberOfNights = Number(input[1]);
    let priceForApartment ;
    let priceForStudio ;

    if (month === "May"|| month === "October") {
        priceForStudio = 50;
        priceForApartment = 65;
    }else if (month === "June"|| month === "September") {
         priceForApartment = 68.70;
         priceForStudio = 75.20;
    }else if (month === "July"|| month === "August") {
         priceForApartment = 77;
         priceForStudio = 76;
    }
    
    if (numberOfNights > 14){
        if (month === "May"|| month === "October"){
        priceForStudio = priceForStudio * 0.7;}}
    else if (numberOfNights > 7){
        if (month === "May"|| month === "October" ){
         priceForStudio = priceForStudio * 0.95;}}
    else if (numberOfNights > 14){
        if (month === "June"|| month === "September") {
     priceForStudio = priceForStudio * 0.8
    }}
    if (numberOfNights > 14) {
       priceForApartment = priceForApartment * 0.9
    }
     let finalPriceforApartment = priceForApartment * numberOfNights
     let finalPriceforStudio = priceForStudio * numberOfNights
    console.log(`Apartment: ${finalPriceforApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${finalPriceforStudio.toFixed(2)} lv.`);
    
    }
    demo (['June','14'])