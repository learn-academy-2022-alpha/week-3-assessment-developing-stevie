// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("hello", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("returns a string that says hi", () => {

      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(hello()).toEqual("hi")
    })
  })

  // a describe method that lists the name of the function OR naming of the particular test.
  describe("fib", () => {

      // a test/it method, nested within the describe block, that in plain words, describes that the function does.
      it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

  //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
  expect(fib(6)).toEqual([1, 1, 2, 3, 5, 8])
  expect(fib(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
  })

// Tests:       1 failed, 2 passed, 3 total

// b) Create the function that makes the test pass.

// function name fib
// input/parameter is a number
// output is an array
// Research of fibonacci sequence...if the array with a length of 6 is equal to [1, 1, 2, 3, 5, 8], so starting at index2, we add the previous indexes to create the value for the following index that means the value for each index is as follows:
// index0 = 1
// index1 = 1
// index2 = index0 + index1 = 1 + 1 = 2
// index3 = index1 + index2 = 1 + 2 = 3
// index4 = index2 + index3 = 2 + 3 = 5
// index5 = index3 + index4 = 3 + 5 = 8

// Start with an array [1, 1]
// // push the values of the indexes into  that will be added to the array

//   //declare a function, told it to look at the parameter which is a number
//   const fib = (num) => {

//     // start with an array of [1, 1], declare a variable to hold that array
//     let seq = [1, 1]

//     // iterated with a for loop starting at 0;
//     // the length has to be reconsidered because our array begins with a length of 2 already for the fibonacci sequence [1, 1]. Therefore, we subtract 2 from the number so we can received the desired length;
//     // and next we tell it to increment up
//     for(let i = 0; i < num - 2; i++) {

//       // pushing the next value of fibonacci sequence to the seq array, used an equation based on the fibonacci research that adds the previous two indexes
//       seq.push(seq[i] + seq[i+1])
//     }

//     //return the mutated array
//     return seq
//   }

// This illustrates how the for loop does it iteration on the seq array when passed the number 6.
// 1st iteration
// [1, 1, (seq[0] + seq[0+1])]
// [1, 1, (1 + 1)]
// [1, 1, 2]

// 2nd iteration
// [1, 1, 2, (seq[1] + seq[1+1])]
// [1, 1, 2, (1 + 2)]
// [1, 1, 2, 3]

// 3rd iteration
// [1, 1, 2, 3, (seq[2] + seq[2+1])]
// [1, 1, 2, 3, (2 + 3)]
// [1, 1, 2, 3, 5]

// 4th iteration
// [1, 1, 2, 3, 5, (seq[3] + seq[3+1])]
// [1, 1, 2, 3, 5, (3 + 5)]
// [1, 1, 2, 3, 5, 8]

// the function without any pseudocode:

const fib = (num) => {
  let seq = [1, 1]
  for(let i = 0; i < num - 2; i++) {
    seq.push(seq[i] + seq[i+1])
  }
  return seq
}

// Tests:       3 passed, 3 total

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
// Expected output: [-823, 7, 23]

// a describe method that lists the name of the function OR naming of the particular test.
describe("sortOdd", () => {
    //a test/it method, nested within the describe block, that in plain words, describes that the function does.
   it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
   let fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];

    let fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
     expect(sortOdd(fullArr1)).toEqual([-9, 7, 9, 199]);
    expect(sortOdd(fullArr2)).toEqual([-823, 7, 23]);
  })
 })

// // b) Create the function that makes the test pass.

//constant oddnums equal (array) => function
//variable arrray equals array filtered
//value funtion => type of value strict equals "string" and operator
//value modual remainer 2 is not equal to 0


const sortOdd = (array) => {
    var oddnums = array.filter((value => value % 2 !== 0 && typeof value === "number"))
 return oddnums.sort((a,b) => a - b);
 }

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total


// PASS  ./code-challenges.test.js
// sortOdd
//   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (8 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

 const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

 const numbersToAdd2 = [0, 7, -8, 12]
  // Expected output: [0, 7, -1, 11]

  const numbersToAdd3 = []
// Expected output: []

// a describe method that lists the name of the function OR naming of the particular test.
  describe("findSum", () => {

// a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {

       let numbersToAdd1 = [2, 4, 45, 9]
        // Excpected output: [2, 6, 51, 60]
        
         let numbersToAdd2 = [0, 7, -8, 12]
          // Expected output: [0, 7, -1, 11]
        
          let numbersToAdd3 = []
        // Expected output: []


 //an expect method, nested within the test block, calling on the numbersToAdd() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(findSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
      expect(findSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
      expect(findSum(numbersToAdd3)).toEqual([])
    })
  })

//   // b) Create the function that makes the test pass. 

//function findSum 
//pram ray 
//start at zero index to make sure order is corrext
//.map to store the array and change the outcome
//then add next index to the the one before it using n



const findSum = (ray) => {
let raySum = 0
return ray.map(n => {return raySum += n})
}

// PASS  ./code-challenges.test.js
// findSum

//--------------old code tried to work out bugs
// and understand what i did wrong but the code 
//is very sloppy and makes it hard to not want to just 
// start from scratch so I'am

//create a function that index after 0
 //and add the number in the index before it
 //to output an array with the sum of the two numbers
 //array = nums console.log(findsum(myArray));
  //funtion sum
 //array sum is 0
  //for i = 0 if greater than array length at the end
  //then sum will = sum + array index value
   //return sum console log function sum



  
//   const findSum = (array) => {
//       if (array.length < 1 ) {
//       return []
//       }
//       let somenumb = (array[0]) 
//       for (let index = 1; index < array.length; index++){
//      somenumb.map(array[index] + somenumb[index-1]) 
//       }
//            return somenumb.map(array[index] + somenumb[index-1])
      
//     }
  
//FAIL  ./code-challenges.test.js
//findSum
//got a lot more fails but decided to cut my losses on this code