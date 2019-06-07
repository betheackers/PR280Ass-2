var calc = new Vue ({
  el: '#calculation-app',
  components: {
    'file-loader': fileLoader,
    'output-component': outputComponent
  },
  data : {
        correlation: 0,
        regression:0,
        correlationDetResult: 0,
        betaOne: 0,
        betaZero: 0,
        arrayX: [],
        arrayY: [],
        linearRegResult: [],
        correlationDetCalculated: false,
        linearRegCalculated: false
  },
  methods : {
    getData (array) {
      if (!this.arrayX.length) {
        this.arrayX.push(...array)
      } else {
        this.arrayY.push(...array)
        this.addData(this.arrayX, this.arrayY)
        this.handleData()
      }
    },
    handleData() {
      this.correlationDetResult = this.calcCorrelation(this.arrayX, this.arrayY)
      this.correlationDetCalculated = true
      this.linearRegResult = this.calcLinearRegression(this.arrayX, this.arrayY)
      this.linearRegCalculated = true
    },
    addData (arrayX, arrayY) {
      // add data to new class
      this.correlation = new CorrelationDetermination(arrayX, arrayY)
      this.regression = new LinearRegression(arrayX, arrayY)
      console.log(this.regression)
    },
    calcCorrelation (arrayX, arrayY) {
      let result = this.correlation.calcCorrelation()
      return result
    },
    calcLinearRegression (arrayX, arrayY) {
      let result = this.regression.calcRegression()
      this.betaOne = this.regression.regression[0]
      this.betaZero = this.regression.regression[1]
      return result
    }
  }
})



//
// var ArrayCalc = {
//   data: function () {
//     return {
//
//     }
//   }
// }
// var BiArrayCalc = {
//   data: function () {
//     return {
//
//     }
// }
