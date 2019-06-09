/* global no-unused-vars: "CorrelationDetermination" */
/* eslint no-unused-vars: "off" */
/* eslint no-undef: "off" */
class CorrelationDetermination {
  constructor (x = [], y = []) {
    this.x = x
    this.y = y
    this.sumX = 0
    this.sumY = 0
    this.sumXSquared = 0
    this.sumYSquared = 0
    this.sumArrayTimesArray = 0
    this.sumXTimesSumY = 0
    this.topRow = 0
    this.bottomRow = 0
    this.leftbottom = 0
    this.rightbottom = 0
    this.xAndY = 0
    this.r = 0
  }
  calcCorrelation () {
    let result = 0
    this.sumX = this.sumArray(this.x)
    this.sumY = this.sumArray(this.y)
    this.sumArrayTimesArray = this.sumArray(this.arrayTimesArray(this.x, this.y))
    this.sumXTimesSumY = this.sumX * this.sumY
    this.topRowCalc()
    this.sumXSquared = this.sumArray(this.arraySquare(this.x))
    this.sumYSquared = this.sumArray(this.arraySquare(this.y))
    this.leftBottomCalc(this.x)
    this.rightBottomCalc(this.y)
    this.multiplyXYBottom()
    this.bottomRowCalc()
    this.r = this.topRow / this.bottomRow
    result = this.square(this.r)
    console.log(result)
    return result
  }
  getSum (total, num) {
    return total + num
  }
  sumArray (array) {
    return array.reduce(this.getSum)
  }
  arrayTimesArray (array1, array2) {
    let arraysTimed = []
    for (let i = 0; i < array1.length; i++) {
      arraysTimed.push(array1[i] * array2[i])
    }
    return arraysTimed
  }
  arraySquare (array) {
    let squaredArray = []
    for (let i = 0; i < array.length; i++) {
      squaredArray.push(Math.pow(array[i], 2))
    }
    return squaredArray
  }
  nTimesSumArrays (array) {
    let result = array.length * this.sumArrayTimesArray
    return result
  }
  topRowCalc () {
    this.topRow = this.nTimesSumArrays(this.x) - this.sumXTimesSumY
  }
  leftBottomCalc (x) {
    this.leftbottom = this.nTimesSquaredSumArrays(x, this.sumXSquared) - this.square(this.sumX)
  }
  rightBottomCalc (y) {
    this.rightbottom = this.nTimesSquaredSumArrays(y, this.sumYSquared) - this.square(this.sumY)
  }
  multiplyXYBottom () {
    this.xAndY = this.leftbottom * this.rightbottom
  }
  bottomRowCalc () {
    this.bottomRow = Math.sqrt(this.xAndY)
  }
  nTimesSquaredSumArrays (array, squaredSumArr) {
    return array.length * squaredSumArr
  }
  square (n) {
    let x = Math.pow(n, 2)
    return x
  }
}
