class BiArraysCalculator {
  constructor (arrays) {
    this.arrays = arrays
    this.sumArrayTimesArray = 0
    this.sumXTimesSumY = 0
  }
  arrayTimesArray (array1, array2) {
    let arraysTimed = []
    for (let i = 0; i < array1.length; i++) {
      arraysTimed.push(array1[i] * array2[i])
    }
    return arraysTimed
  }
  nTimesSumArrays (array) {
    return array.length * sumArrayTimesArray
  }
  nTimesSquaredSumArrays (array, squaredSumArr) {
    return array.length*squaredSumArr
  }
  division (top, bottom) {
    return top/bottom
  }
}
