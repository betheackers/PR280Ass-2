// https://codepen.io/Anveio/pen/XzYBzX
// https://stackoverflow.com/questions/13729301/html5-file-api-how-to-see-the-result-of-readastext

var fileLoader = {
  template: `
<div>
  <div class="row">
        <div class="col-sm">
          <h2>Select your first text file</h2>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div class="custom-file">
              <input type="file" @change="onFileChange" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
        </div>
        <div v-if="firstFileLoaded === true" class="col-sm">
          <h2>Select a second text file</h2>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div class="custom-file">
              <input type="file" @change="onFileChange" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
      </div>
  </div>
  <br><br>
  <table class="table table-striped table-dark table-sm">
    <thead style="text-align:center;">
      <tr>
        <th scope="col">#</th>
        <th scope="col">X</th>
        <th scope="col">Y</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="n in firstArray.length">
        <td style="text-align:center;"></td>
        <td style="text-align:center;">{{ firstArray[n-1] }}</td>
        <td style="text-align:center;">{{ secondArray[n-1] }}</td>
      </tr>
    </tbody>
    <!--      <tfoot>
              <tr>
              <th>Totals</th>
              <td>var1</td>
              <td>var2</td>
              </tr>
              </tfoot>    -->
  </table>
</div>`,
  data: function () {
    return {
      firstArray: [],
      secondArray: [],
      firstFileLoaded: false
    }
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files
      if (files.length) {
        this.loadNumbers(files[0])
      }
    },
    loadNumbers(file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        if (this.firstFileLoaded === false) {
          console.log(e.target.result)
          this.firstArray.push(...e.target.result.trim().split(/\s+/g).map(Number))
          this.$emit('get-data', this.firstArray)
          console.log(this.firstArray)
          this.firstFileLoaded = true
        } else {
          this.secondArray.push(...e.target.result.trim().split(/\s+/g).map(Number))
          this.$emit('get-data', this.secondArray)
          console.log(this.secondArray)
        }
      }
      reader.readAsText(file)
    }
  }
}
