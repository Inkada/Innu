import { Bar } from "react-chartjs-2"
import { colors } from "../../../Estilos/theme"
import { Varibales } from "../../../Hooks/Varibales"
import { Med1 } from "../../../Hooks/Med1"
import { Med2 } from "../../../Hooks/Med2"

const data = {
  labels: [
    Varibales[0],
    Varibales[1],
    Varibales[2],
    Varibales[3],
    Varibales[4],
    Varibales[5],
    Varibales[6],
    Varibales[7],
  ],
  datasets: [
    {
      label: "Medición 1",
      barThickness: 8,
      data: Med1,
      backgroundColor: [
        colors.yellow,
        colors.yellow,
        colors.yellow,
        colors.yellow,
        colors.yellow,
        colors.yellow,
        colors.yellow,
        colors.yellow,
        colors.yellow,
      ],
    },

    {
      label: "Medición 2",
      barThickness: 8,
      data: Med2,
      backgroundColor: [
        colors.red,
        colors.red,
        colors.red,
        colors.red,
        colors.red,
        colors.red,
        colors.red,
        colors.red,
      ],
    },
  ],
}

export default () => ({
  displayName: "Gráfica De Barras",
  render() {
    return (
      <div>
        <Bar
          data={data}
          options={{
            maintainAspectRatio: true,
            responsive: true,

            layout: {
              padding: {
                left: 10,
                right: 0,
                top: 0,
                bottom: 0,
              },
            },

            legend: {
              labels: {
                fontColor: colors.white,
              },
              display: true,
              align: "start",
            },
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
        <style jsx>{``}</style>
      </div>
    )
  },
})
