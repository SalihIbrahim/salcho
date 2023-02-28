function num(input){
    let numbers = Number(input[0]);

    let nums1Count = 0;
    let nums2Count = 0;
    let nums3Count = 0; 

    for (let i = 1; i <= numbers; i++) {
        let currentNum = Number(input[i]);

        if (currentNum % 2 === 0) {
            nums1Count++;
        }if (currentNum % 3 === 0) {
            nums2Count++;
        }if (currentNum % 4 === 0) {
            nums3Count++;
        }
    }
   let nums1Percent = (nums1Count / numbers)*100
   let nums2Percent = (nums2Count / numbers)*100
   let nums3Percent = (nums3Count / numbers)*100

   console.log(`${nums1Percent.toFixed(2)}%`);
   console.log(`${nums2Percent.toFixed(2)}%`);
   console.log(`${nums3Percent.toFixed(2)}%`);
}
num (["3","3","6","9"]);