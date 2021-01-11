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
      borderColor: colors.red,
      pointBackgroundColor: colors.red,
      pointBorderColor: colors.red,
      data: Med1,
    },
    {
      label: "Medición fecha2",
      borderColor: colors.yellow,
      pointBackgroundColor: colors.yellow,
      pointBorderColor: colors.yellow,

      data: Med2,
    },
  ],
}

export default () => ({
  displayName: "Gráfica Radar",
  render() {
    return (
      <div>
        <Radar
          data={data}
          max-width={400}
          options={{
            legend: {
              display: true,
              align: "start",
              fontColor: colors.white,
            },
            maintainAspectRatio: true,
            responsive: true,

            scale: {
              angleLines: {
                display: true,
                fontColor: colors.white,
              },
              ticks: {
                fontColor: colors.white,
              },
            },
          }}
        />

        <style jsx>{``}</style>
      </div>
    )
  },
})
