// ASSESSMENT 3: Coding Practical Questions with Jest
//why are there here? would have posted in slack but just saw now late before test is due
const { values } = require("lodash")
const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
//variable 

//variable i =6 
//const tiredSeq equals (number) 
//function variable array equals [1,1]
//for let i = 0 
//i greater than n-2 itterate
// function  push array to (array[index] plus (array [index + 1]))
// return array

var i = 6


 const triedSeq = (n) => {
     var array = [1,1]
    for (let i=0; i < n-2; i++){
        array.push(array[i] + (array[i+1]))
     }
    return array
}



// a) Create a test with expect statements for each of the variables provided.
//expect (tiredSeq) to equal Expected output: [1, 1, 2, 3, 5, 8] with Example input: 6

//need to work on jest and figuring out end solutions to problems 
// main issue with just is figuring out expect statements one bad work can make the test not pass 

 //Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//constant oddnums equal (array) => function
//variable arrray equals array filtered 
//value funtion => type of value strict equals "string" and operator
//value modual remainer 2 is not equal to 0


//  const sortOdd = (array) => {
//      let result = array.filter(value === "number")
//     and 
//      }

 const oddNumb =  (array) => {
     var array = array.fliter(value => typeof value === "number" && value % 2 !== 0)
 }



// b) Create the function that makes the test pass.

// Expected output: [-9, 7, 9, 199]



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.



const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []




//expect() [ ] has value then console log [ ] + (0 + [i])

//create a function that index after 0
//and add the number in the index before it 
//to output an array with the sum of the two numbers
//array = nums
//funtion sum
//array sum is 0
//for i = 0 if greater than array length at the end
//then sum will = sum + array index value
//return sum console log function sum


var myArray = (numbersToAdd1)

function findSum (myArray){
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i];
    }
    return sum;
}
console.log(findsum(myArray));


//expect( if index has value then myArray takes index value and adds it to the index before using i + 1 to get the index of the value before it and conole logs the sum in an array)
//expect() [ ] has value then console log [ ] + (0 + [i])

//..............................try try again this sucks and i still feel like i dont get it and will always have to look up a million things to just figure out what im doing even though i can figure it out once i stop over thinking i'm very tired i just want to go sit on a bench with appa at the park but i have to work on this 



// function sum( [i] + 0 ){

// }


// var Array = numbersToAdd1

// var [i] = (Array)

// function sum(Array) {
//     if (([i] + 0) < -1)
//         console.log(this.map([i]) + 0)
    


// }

// Excpected output: [2, 6, 51, 60])



// function sum( [i] + 0 ){

// }



// var array = [i]
// var value = array.length


// const sum = (array) => {
//     if([i] = value) {
// console.log([i] +  ) 
//     }

//     }


// var numb = [1,2,3,4,5]
// var zero = 0;
// for(var i = 0; i < numb.length; i++){
//     zero += numb[i];
// }

    
// b) Create the function that makes the test pass.

