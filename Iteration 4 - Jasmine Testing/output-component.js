// https://codepen.io/Anveio/pen/XzYBzX
// https://stackoverflow.com/questions/13729301/html5-file-api-how-to-see-the-result-of-readastext

var outputComponent = {
  props: [
    'correlationDetResult',
    'betaOne',
    'betaZero'
  ],
  template: `
    <div>
      <div class="alert alert-warning" role="alert" >
        <h3> The correlation of determination is {{ correlationDetResult }} </h3>
      </div>
      <div class="alert alert-info" role="alert" >
        <h3> The linear regression result is: Beta 1 =  {{ betaOne }} and Beta 0: {{ betaZero }}</h3>
      </div>
    </div>`, // this is from vue-Calc.....
    data: function () {
      return {
        // put above:
      }
    }
}