//To cutting element from where to where then use slice
//To cutting element where to how many then use splice
const digits =[1,2,3,4,5,6,8,9,7,11,22,45];
const remove = digits.slice(2, 9);
const delate = digits.splice(1,2, 55,);
console.log(delate);
console.log(digits);

// To joining element we use join
const number = [1,2,3,6,5,4,9,8,7,5];
const joinElement = number.join(',');
console.log(joinElement);
