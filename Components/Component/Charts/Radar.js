import { Radar } from "react-chartjs-2"
import { colors } from "../../../Estilos/theme"
import { Med1 } from "../../../Hooks/Med1"
import { Med2 } from "../../../Hooks/Med2"

console.log(Med1)

const data = {
  labels: [
    "Recursos",
    "Negocio",
    "Creatividad",
    "Educación",
    "Intención de innovación",
    "Empresa",
    "Equipo",
    "Comunicación",
  ],
  datasets: [
    {
      label: "Medición fecha1",
      backgroundColor: colors.red,
      borderColor: colors.red,
      pointBackgroundColor: colors.red,
      pointBorderColor: colors.red,
      data: Med1,
    },
    {
      label: "Medición fecha2",
      backgroundColor: colors.yellow,
      borderColor: colors.yellow,
      pointBackgroundColor: colors.yellow,
      pointBorderColor: colors.yellow,
      pointHoverBackgroundColor: colors.yellow,
      pointHoverBorderColor: colors.yellow,
      data: Med2,
    },
  ],
}

export default () => ({
  displayName: "Gráfica Radar",
  render() {
    return (
      <div>
        <h2>Radar variables innu</h2>

        <Radar
          data={data}
          options={{
            legend: {
              display: true,
              align: "start",
            },
            maintainAspectRatio: true,
            responsive: true,

            scale: {
              angleLines: {
                display: true,
              },
            },
          }}
        />

        <style jsx>{`
          h2 {
            color: ${colors.darkViolet};
            font-size: 20px;
            padding: 5px 0px 0px 20px;
          }
        `}</style>
      </div>
    )
  },
})
