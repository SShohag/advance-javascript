//If we don't declare any value
let name;
console.log(name);
//if we don't return then it will be undefined
function add (num1, num2){
    return
}
const result = add(15, 81);
console.log(result);
//When try to find undeclar property
const mobile ={price: 1550, name: 'Nokia', model:'s1200', made:'japan'};
console.log(mobile.id);
//try to find unknown value from arry
const age = [25, 15, 16, 21];
console.log(age[5]);