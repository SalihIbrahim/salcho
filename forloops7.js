function trecking(input){
    let groupsNumber = Number(input[0]);
    let peopleNum = 0;
    
    let mountain1Count = 0;
    let mountain2Count = 0;
    let mountain3Count = 0;
    let mountain4Count = 0;
    let mountain5Count = 0;

    for (let i = 1; i <= groupsNumber; i++) {
        let numsOfMountain = Number(input[i]);
        peopleNum = peopleNum + numsOfMountain;

        if (numsOfMountain <= 5) {
            mountain1Count+=numsOfMountain;
        }else if (numsOfMountain <= 12){
            mountain2Count+=numsOfMountain;
        }else if (numsOfMountain <= 25){
            mountain3Count+=numsOfMountain;
        }else if(numsOfMountain <= 40){
            mountain4Count+=numsOfMountain;
        }else{
            mountain5Count+=numsOfMountain;
        }
    }
 let mountain1percent = (mountain1Count/peopleNum) * 100
 let mountain2percent = (mountain2Count/peopleNum) * 100
 let mountain3percent = (mountain3Count/peopleNum) * 100
 let mountain4percent = (mountain4Count/peopleNum) * 100
 let mountain5percent = (mountain5Count/peopleNum) * 100

     console.log(`${mountain1percent.toFixed(2)}%`);
     console.log(`${mountain2percent.toFixed(2)}%`);
     console.log(`${mountain3percent.toFixed(2)}%`);
     console.log(`${mountain4percent.toFixed(2)}%`);
     console.log(`${mountain5percent.toFixed(2)}%`);
}
trecking (["5","25","41","31","250","6"]);