function serials(input){
    let budget = Number(input[0]);
    let nums = Number(input[1]);
    let finalPrice = 0;

    for (let i = 2; i < input.length; i+=2) {
        let serialName = input[i];
        let serialNumber = Number(input[i+1]);
        
        if (serialName === 'Thrones') {
            serialNumber = serialNumber * 0.5;
        }if (serialName === 'Lucifer') {
            serialNumber = serialNumber * 0.6;
        }if (serialName === 'Protector') {
            serialNumber = serialNumber * 0.7;
        }if (serialName === 'TotalDrama') {
            serialNumber = serialNumber * 0.8;
        }if (serialName === 'Area') {
            serialNumber = serialNumber * 0.9;
        }
        
        finalPrice += serialNumber
    }
     let difference = Math.abs(budget - finalPrice);
     if (budget >= finalPrice) {
     console.log(`You bought all the series and left with ${difference.toFixed(2)} lv.`);
     }
     if (finalPrice>budget) {
     console.log(`You need ${difference.toFixed(2)} lv. more to buy the series!`);
     }
}
serials (['10','3','Thrones','5','Riverdale','5','Gotham','2'])