function demo(input) { 
    let daystoStay = Number(input[0]);
    let typeofRoom = input[1];
    let rate = input[2];
    let nightstoStay = daystoStay - 1
    let price = 0;
    let finalPrice = 0;
    
    if (daystoStay<10){
        switch (typeofRoom){
              case 'room for one person':
              price = nightstoStay * 18;
        break;
             case 'apartment':
             price = (nightstoStay * 25) * 0.7;
        break;
             case 'president apartment':
             price = (nightstoStay * 35) * 0.9;
        break;
        }
    } else if (daystoStay<15) {
        switch (typeofRoom){
            case 'room for one person':
            price = nightstoStay * 18;
      break;
           case 'apartment':
           price = (nightstoStay * 25) * 0.65;
      break;
           case 'president apartment':
           price = (nightstoStay * 35) * 0.85;
      break;
    } 
} else {
    switch (typeofRoom){
        case 'room for one person':
        price = nightstoStay * 18;
  break;
       case 'apartment':
       price = (nightstoStay * 25) * 0.50;
  break;
       case 'president apartment':
       price = (nightstoStay * 35) * 0.80;
  break;
    }
  }
  if (rate === 'positive'){
   finalPrice = price + (price * 0.25)
  } else if (rate === 'negative'){
    finalPrice = price * 0.9
  }
  console.log((finalPrice).toFixed(2));
}
demo(["14","apartment","positive"]);