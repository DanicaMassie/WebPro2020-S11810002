//Arrow Function 

// ES5
//var multiplyES5 = function(x, y) {
//    return x * y;
//  };
  
//  // ES6
//  var multiplyES6 = (x, y) => { return x * y };
  
//  console.log(multiplyES6 (5,10));  


//ES6 Syntax
//excercise
const yearsUntilRetirement = (year , firstName ="Niskat") => { // Arrow Function & Default
   const age =`${28}`;  //Template Literal
        const retirement = 65 - age;
       if (retirement > 0) {
        console.log(` ${firstName} retired in ${retirement} years` );
  }
   else {
        console.log(`${firstName} is already retired`);
   }
 }

 yearsUntilRetirement(2000);