// Arrow FUnction 

//Singe Argument 
//const calcAge = (year) => {
//    return 2020 - year;
//};

// console.log(calcAge(1991));

// Multiple argument 
//const calcAge = (birtYear, currentYear) => {
// const x;
//   return birthYear - curruntYear;
//};

//No argument with implicit return value 
// const calcAge = () => 2020-1992;
// console.log(calcAge());


//const years = [1990, 1992, 2001, 2005];
//const calcAge5 = years.map(function(el) {
//    return 2020 - el;
//});

//const calcAge6 = years.map((el) => 2020 - el);

//console.log(calAge6);

// Default parameter 
const calcAge = (birthYear, curruntYear = 2020) => curruntYear - birthYear;


console.log(calcAge(1991, 2021));