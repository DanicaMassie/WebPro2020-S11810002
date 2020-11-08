//Var, Let, Const

//let nama = "Danica";
//let nama = "Godelva";

//console.log(nama);

//Scope dalam javascript
// 1. Function scope (var)
// 2. Block Scope

//function tes(){
//   for (var i = 0; i < 10; i++){
//   console.log(i);
//     }
//}
//tes();

//console.log(i);
//{
//    let i;
//for (let i = 0; i < 10; i++){
//    console.log(i);
// }
//}
//console.log(i);

//Template Literal 

const person = {
    firstName: "Danica",
    lastName: "Godelva",
    age: 20,
};

//console.log("Hallo, nama saya " + person.firstName +" "+ person.lastName + " Umur saya " +person.age + " tahun ");

console.log(
    'Hallo nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age}'
    );