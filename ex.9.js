function ex3(input){
let numsCount = Number(input[0]);

let p1count = 0;
let p2count = 0;
let p3count = 0;
let p4count = 0;
let p5count = 0;

for (let i = 1; i <= numsCount; i++) {
    let currentNum = Number(input[i]);

   if (currentNum <= 199) {
    p1count++;
   }else if (currentNum <= 399) {
    p2count++;
   }else if (currentNum <= 599) {
    p3count++;
   }else if (currentNum <= 799) {
    p4count++;
   }else{
    p5count++;
   }

}
let p1Percent = (p1count / numsCount) * 100   
let p2Percent = (p2count / numsCount) * 100   
let p3Percent = (p3count / numsCount) * 100   
let p4Percent = (p4count / numsCount) * 100
let p5Percent = (p5count / numsCount) * 100

console.log(`${p1Percent.toFixed(2)}%`);
console.log(`${p2Percent.toFixed(2)}%`);
console.log(`${p3Percent.toFixed(2)}%`);
console.log(`${p4Percent.toFixed(2)}%`);
console.log(`${p5Percent.toFixed(2)}%`);
}
ex3(["3","1","2","999"]);