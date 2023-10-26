
// 1
const cube = function(x){
    return x * x * x

}
console.log(cube(23));
// 2
const fullName = function(first, last) {
    return first + " " + last;
  };

  console.log(fullName("Ade", "Ahmed "));

// 3
  const power = function(base, exp){
    if (exp === 0){
        return 1;
    }
    return base * power(base, exp -1);
  };
  console.log(power(2,3));

  const sumCubes = function(nr){
    let total = 0;
    for (let i = 0; i < nr.length; i++ ){
        total = total + cube(nr[i]);
    }
    return total;
    
  }
  console.log(sumCubes([1,2,3]));


// Part 2/3: Mechanics of Hoisting

// You are logging to the console before defining the 'message' variable.





