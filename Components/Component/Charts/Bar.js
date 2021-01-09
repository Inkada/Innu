import { Bar } from "react-chartjs-2"
import { colors } from "../../../Estilos/theme"

const data = {
  labels: ["Red", "Print", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Medición 1",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
    },

    {
      label: "Medición 2",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
    },
  ],
}

export default () => ({
  displayName: "BarExample",
  render() {
    return (
      <div>
        <h2>Cultura de innovación barras</h2>
        <Bar
          data={data}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            aspectRatio: 1,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    )
  },
})
