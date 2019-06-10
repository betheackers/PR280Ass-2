// https://codepen.io/Anveio/pen/XzYBzX
// https://stackoverflow.com/questions/13729301/html5-file-api-how-to-see-the-result-of-readastext
/* eslint no-unused-vars: "off" */
/* eslint no-undef: "off" */
var outputComponent = {
  props: [
    'correlationDetResult',
    'betaOne',
    'betaZero'
  ],
  template: `
    <div>
      <div class="alert alert-warning" role="alert" >
        <h3>
          The correlation of determination is: <br><br>
          {{ correlationDetResult }}
        </h3>
      </div>
      <div class="alert alert-info" role="alert" >
        <h3>
          The linear regression result is: <br><br>
          Beta 1:  {{ betaOne }} <br>
          Beta 0: {{ betaZero }}
        </h3>
      </div>
    </div>`
}
