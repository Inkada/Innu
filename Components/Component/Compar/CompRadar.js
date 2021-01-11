import Radar from "../Charts/Radar"
import { colors } from "../../../Estilos/theme"

export default () => ({
  render() {
    return (
      <>
        <div>
          <h2>Radar variables innu</h2>
          <p>Equipos</p>
          <contendor>
            <Radar></Radar>
          </contendor>
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

          h2 {
            color: ${colors.white};
            font-size: 20px;
            padding: 5px 0px 0px 20px;
          }
          p {
            color: ${colors.white};
            font-size: 12px;
            padding: 5px 0px 0px 20px;
          }
        `}</style>
      </>
    )
  },
})
