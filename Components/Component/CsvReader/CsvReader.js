import CSVReader from "react-csv-reader"
import * as React from "react"

export default class Csv extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      filterData: null,
      uploadedData: false,
    }
  }

  uploadData = (data) => {
    data.shift()
    this.setState({ data, filterData: data, uploadedData: true })
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
          label="Por favor, adjunte el archivo CSV que quiere visualizar"
          onFileLoaded={this.uploadData}
        />

        {
          // <button>Cargar archivo nuevamente</button>
        }
      </div>
    )
  }
}
