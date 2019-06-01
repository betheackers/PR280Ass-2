var calc = new Vue ({
  el: '#calculation',
  data : {
      calculators: [
        new CorrelationDetermination(array1, array2)
        // new LinearRegression (array1, array2)
      ]
  },
  methods : {
    // calcSum (x) {
    //   let sumX = new CorrelationDetermination
    }

  }
})
