class Calculator {
  static calcSum(allNumbers) {
    return allNumbers.reduce((sum, x) => sum += x)
  }
}
module.exports = Calculator