//Square the element by for loop

// const number = [2,4,6,9,7,5];
// const output = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element*element;
//     output.push(result);
// }
// console.log(output);

//Using map 

// const numeral = [3,4,5,6,7,8];

// function square (element,array){  //pass this function to map 
//     return element*element;
// }

//Arrow type function declaring

// const square = element =>element*element;
//or

// const square = x => x * x;

//Map written formate

// numeral.map(function(element, index, array){
//     console.log(element, index, array);
// });

//Final using map 

// const digit = [4,6,8,2,1];

// const result = digit.map(function(element){
//     return element*element;
// });
// console.log(result);

//Easy way to mapping 

// const numeric = [2,3,4,5,6];
// const ans = numeric.map(x => x*x);
// console.log(ans);


// Filtering the number 
// const numeral = [2,3,4,6,9,7,18];
// const result = numeral.filter( x => x>5); //Give me the number which is bigger then 5
// const evenNumber = numeral.filter(x => x%2==0); //To find evenNumber
// console.log(oddNumber);

//Finding number 
const number = [5,6,8,7,9,10,25,31,54];
const result = number.find(x => x>31);
console.log(result);
