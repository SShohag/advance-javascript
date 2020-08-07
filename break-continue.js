// const number = [1,2,3,4,5,6,7];
// for(let i = 0; i < number.length; i++){
   
//     if ([i] > 3){
//         break;
//     }
//     console.log(number[i]);
// }

//
const num = [1,-3,5,-44,55,4,-858,-45,45,14,51,45,4]
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if(element<0){
        continue;
    }
    console.log(element);
}