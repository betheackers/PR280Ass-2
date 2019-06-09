// CommonJS Modules, one ECMAScript 5 module systems, in Node.js
const {
  readFile,
  appendFileSync
} = require('fs')


/* 
// when using fs.promises API of Node
const fs = require('fs')
const fsPromises = fs.promises 
*/


const Calc = require('./Calculator.js')

let inFile = process.argv[2]
let outFile = process.argv[3]
console.log("%s \r\n%s", inFile, outFile)

readFile(inFile, 'utf8', (error, text) => {
  if (error) {
    throw error
  }

  let dataArray = text.split('\r\n').map(x => Number(x))
  console.log(dataArray)

  let sum = Calc.calcSum(dataArray)
  console.log(sum)

  for (let x of dataArray) {

    /*  
    // Asynchronously append data to a file   
    fsPromises.appendFile(outFile, x + '\r\n')
      .then(() => {
        console.log('added ', x)
      })
      .catch((err) => {
        console.log(err)
      })
    }

    fsPromises.appendFile(outFile, 'sum = ' + sum + '\r\n')
      .then(() => {
        console.log('sum added ', sum)
      })
      .catch((err) => {
        console.log(err)
      })
    */ 



    // Synchronously append data to a file
    try {
      appendFileSync(outFile, x + '\r\n')
      console.log('added ', x)
    } catch (err) {
      console.log(err)
    }
  }

  try {
    appendFileSync(outFile, 'sum = ' + sum + '\r\n')
    console.log('sum added ', sum);
  } catch (err) {
    console.log(err)
  }
})