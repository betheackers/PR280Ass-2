// const { AccumulationCalculator } = require('./model')

class Calculation {
  constructor() {
    this.x = 2;
    this.ac = new AccumulationCalculator()
  }

  calculate() {
    for (let i = 0; i < 5; ++i) {
      this.ac.calculateAccumulation(this.x)
      console.log(this.ac.result)
    }
  }
}

let calculate = new Calculation()
calculate.calculate()
