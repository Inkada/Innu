import Bar from "../Charts/Bar"
import { colors } from "../../../Estilos/theme"

export default () => ({
  render() {
    return (
      <>
        <div>
          <h2>Cultura de innovación barras</h2>
          <p>Periodos</p>
          <contendor>
            <Bar></Bar>
          </contendor>
          <br></br>
        </div>
        <style jsx>{`
          contendor {
            width: 100%;
          }

          div {
            background-color: ${colors.darkViolet};
            border-radius: 6px;
            width: 100%;
          }
          p {
            color: ${colors.white};
            font-size: 12px;
            padding: 5px 0px 0px 20px;
          }

          h2 {
            color: ${colors.white};
            font-size: 20px;
            padding: 5px 0px 0px 20px;
          }
        `}</style>
      </>
    )
  },
})
