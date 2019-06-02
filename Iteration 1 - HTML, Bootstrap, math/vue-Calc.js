var calc = new Vue ({
  el: '#calculation-app',
  components: {
    'file-loader': fileLoader,
    'output-component': outputComponent
  },
  data : {
        // new CorrelationDetermination(array1, array2)
        // new LinearRegression (array1, array2)
        correlation: [],
        regression:[],
        correlationDetResult: 0,
        linearRegResult: 0
  },
  methods : {
    getData (array) {
      // get data from loaded files
    },
    addData (arrayX, arrayY) {
      // add data to new class
      this.correlation.push(new CorrelationDetermination(arrayX, arrayY))
    },
    calcCorrelation (arrayX, arrayY) {
      let result = this.correlation.calcCorrelation(arrayX, arrayY)
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
