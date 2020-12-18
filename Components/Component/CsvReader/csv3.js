import CSVReader from "react-csv-reader"
import * as React from "react"

export default class C3sv extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      filterData: null,
      correos: null,
      uploadedData: false,
      promedio: null,
      a: null,
    }
  }

  uploadData = (data) => {
    data.shift()
    this.setState({
      data,
      filterData: data,
      uploadedData: true,
      correos: data.map((x) => x[1]),
      promedio: data.map((x) => parseInt(x[4])).reduce((a, b) => a + b),
      a: b / data.length,
    })
    console.log(this.state)
  }

  showData = () => {
    if (!this.state.uploadedData) {
      return <p>No se ha cargado ningún archivo.</p>
    } else {
      return <p>{this.state.data}</p>
    }
  }

  render() {
    return (
      <div className="App">
        <CSVReader
          cssClass="react-csv-input"
          label="Agregar csv"
          onFileLoaded={this.uploadData}
        />
        {}
      </div>
    )
  }
}
