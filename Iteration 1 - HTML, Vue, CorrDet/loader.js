// https://codepen.io/Anveio/pen/XzYBzX
// https://stackoverflow.com/questions/13729301/html5-file-api-how-to-see-the-result-of-readastext

var fileLoader = {
  template: `<div class="row">
                <div class="col-sm">
                  <h2>Select your first text file</h2>
                  <input type="file" @change="onFileChange">
                  <br />
                  <br />
                  {{firstArray}}
                </div>
                <div v-if="firstFileLoaded === true" class="col-sm">
                  <h2 >Select a second text file</h2>
                  <input type="file" @change="onFileChange">
                  <br />
                  <br />
                  {{secondArray}}
                </div>
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
