const student = [
    {id:1510, name:'Sobuj'},
    {id:1520, name:'sofiq'},
    {id:1511, name:'jahid'},
    {id:1512, name:'swadin'}
];
const name = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id>1510);
const smaller = student.find(s => s.id>1511);
console.log(smaller);
console.log(ids);
