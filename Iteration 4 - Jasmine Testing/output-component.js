// https://codepen.io/Anveio/pen/XzYBzX
// https://stackoverflow.com/questions/13729301/html5-file-api-how-to-see-the-result-of-readastext

var outputComponent = {
  props: [
    'correlationDetResult',
    'linearRegResult'
  ],
  template: `
    <div>
      <div class="alert alert-warning" role="alert" >
        <h3> The correlation of determination is {{ correlationDetResult }} </h3>
      </div>
      <div class="alert alert-info" role="alert" >
        <h3> The linear regression result is {{ linearRegResult }}</h3>
      </div>
    </div>`, // this is from vue-Calc.....
    data: function () {
      return {
        // needed?
      }
    }
}
