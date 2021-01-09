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
        </div>
        <style jsx>{`
          contendor {
            width: 100%;
          }

          div {
            background-color: ${colors.white};
            border-radius: 6px;
            width: 100%;
          }
        `}</style>
      </>
    )
  },
})
