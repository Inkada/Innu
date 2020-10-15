import CSVReader from "react-csv-reader"
import * as React from "react"
import { Bar } from "react-chartjs-2"

export default class Csv extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      filterData: null,
      uploadedData: false,
    }
  }

  Barradata = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  uploadData = (data) => {
    data.shift()
    this.setState({ data, filterData: data, uploadedData: true })
    console.log(data)
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

        <div>
          <h2>Cultura de innovación barras</h2>
          <Bar
            data={this.Barradata}
            width={100}
            height={100}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>

        {
          // <button>Cargar archivo nuevamente</button>
        }
      </div>
    )
  }
}
