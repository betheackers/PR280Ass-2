var calc = new Vue ({
  el: '#calculation-app',
  components: {
    'file-loader': fileLoader,
    'output-component': outputComponent
  },
  data : {
        // new CorrelationDetermination(array1, array2)
        // new LinearRegression (array1, array2)
        correlation: 0,
        regression:[],
        correlationDetResult: 0,
        linearRegResult: 0,
        arrayX: [],
        arrayY: [],
        correlationDetCalculated: false
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
    },
    addData (arrayX, arrayY) {
      // add data to new class
      // this.regression = new LinearRegression(arrayX, arrayY)
      this.correlation = new CorrelationDetermination(arrayX, arrayY)
    },
    calcCorrelation (arrayX, arrayY) {
      let result = this.correlation.calcCorrelation()
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
