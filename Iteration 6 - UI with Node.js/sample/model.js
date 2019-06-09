// Model
class AccumulationCalculator {
  constructor() {
    this.result = 0
  }

  calculateAccumulation(x) {
    this.result += x
  }
}

try {
  module.exports = { AccumulationCalculator: AccumulationCalculator }
} catch (err) {
  // console.error(err)
}