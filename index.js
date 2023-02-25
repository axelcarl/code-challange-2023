// Here is my solution to the code exercise, I will have -
//  detailed comments throughout the file where I explain my reasoning

// I will start of importing all the node modules/packages that will -
//  be used in the script

const filesystem = require('fs');

// Here I read the data from a csv file where I have stored the -
//  example data

const data = filesystem.readFileSync('data.txt', { encoding: 'utf-8' },
  (err, data) => {
    if (err) {
      console.log(err);
    }
    return data;
  });

// With a simple print statement (console.log(data)) we can now -
//  see that the data is read

// Moving on I split the data into separate lines whilst -
//  removing newline chars and "\t"-'s
const stringArray = data.replace(/\t/g, "").split(/\r\n/g);


// Extract every operator from the string array and - 
//  create an object for each operator
const getOperators = (arr) => {
  const operators = [];

  arr.forEach(str => {
    if (str.match('Operator')) {
      // Here I omit the last char of the operator string since it is a colon
      const name = str.slice(0, -1);
      operators.push({ name, prefixes: [] });
    } else {
      const temp = {};
      temp.num = parseInt(str.split(" ")[0]);
      temp.rate = parseFloat(str.split(" ")[1]);
      operators[operators.length - 1].prefixes.push(temp);
    }
  });

  return operators;
}

// Here I go through each operator and look for the selected prefix - 
//  if found, and if its less than 'cheapestRate' the prefix and operator is saved
const getCheapestOperator = (arr, num) => {
  let cheapestOp = "No operator found";
  let cheapestRate = Infinity;

  arr.forEach(op => {
    op.prefixes.forEach(prefix => {
      if (prefix.rate < cheapestRate &&
        prefix.num === num) {
        cheapestOp = op.name;
        cheapestRate = prefix.rate;
      }
    })
  });
  return cheapestOp;
}

// Here I assing the operators to a variable
const operators = getOperators(stringArray);

// Here I enter a constant that will the the desired prefix
const PREFIX = 1;

// Here I output the cheapest operator for the given prefix
console.log('The cheapest operator is: '
  + getCheapestOperator(operators, PREFIX));

// Here I export the main function in order to perform unit-tests
module.exports = { getCheapestOperator };

