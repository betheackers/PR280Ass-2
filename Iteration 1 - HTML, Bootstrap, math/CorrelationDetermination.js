class CorrelationDetermination {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.sumX = 0
    this.sumY = 0
    this.sumXSquared = 0
    this.sumYSquared = 0
    this.sumArrayTimesArray = 0
    this.sumArrayTimesArray = 0
    this.sumXTimesSumY = 0
    this.squaredArray = []
    this.topRow = 0
    this.bottomRow = 0
    this.leftbottom = 0
    this.rightbottom = 0
    this.xAndY = 0
  }
  getSum(total, num) {
    return total + num;
  }
  sumArray (array) {
    return array.reduce(getSum)
  }
  arraySquare(array) { // what do I do here...
    for (let i = 0; i < array.length; i++) {
      this.squaredArray.push(Math.pow(array[i],2))
    }
  }
  arrayTimesArray (array1, array2) {
    let arraysTimed = []
    for (let i = 0; i < array1.length; i++) {
      arraysTimed.push(array1[i] * array2[i])
    }
    return arraysTimed
  }
  sumSquaredArray (array) {
    return this.sumArray(arraySquare(array))
  }
  sumArrTimesArr (x, y) {
    return this.sumArray(arrayTimesArray(x,y))
  }
  sumOfXTimesSumOfY () {
    return sumX * sumY
  }
  nTimesSumArrays (array) {
    return array.length * sumArrayTimesArray
  }
  topRowCalc () {
    this.topRow = nTimesSumArrays(x)-sumXTimesSumY
  }
  leftBottomCalc (x) {
    this.leftbottom = nTimesSquaredSumArrays(x, sumXSquared)-npoweredX
  }
  rightBottomCalc () {
    this.rightbottom = nTimesSquaredSumArrays(y, sumYSquared)-npoweredY
  }
  multiplyXYBottom () {
    this.xAndY = this.leftbottom * this.rightBottom
  }
  bottomRowCalc () {
    return Math.sqrt(xAndY)
  }
  nTimesSquaredSumArrays (array, squaredSumArr) {
    return array.length*squaredSumArr
  }
  square (n) {
    let x = Math.pow(n,2)
    return x
  }
  substraction (a, b) {
    return a - b
  }
}
