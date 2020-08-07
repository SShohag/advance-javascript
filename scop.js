//Scope
let bonus = 21; //Global variable it can access from anywhere
function add (num1, num2){
    let result = num1 + num2;
    if( result>2){
        const mood = 'Awesome';
        console.log(mood);
    }
    console.log(num1 + num2);
    return result;
}
const result = add (5,3);
console.log(result);
//When we call some variable to function it's depend on the according to type of = let var const 