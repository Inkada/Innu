import Radar from "../Charts/Radar"
import { colors } from "../../../Estilos/theme"

export default () => ({
  render() {
    return (
      <>
        <div>
          <contendor>
            <Radar></Radar>
          </contendor>
          <br></br>
        </div>
        <style jsx>{`
          contendor {
            width: 100%;
          }

          div {
            background-color: ${colors.white};
            border-radius: 6px;
            width: 95%;
            max-height: 45h;
          }
        `}</style>
      </>
    )
  },
})
