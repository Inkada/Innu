import Radar from "../Charts/Radar"
import { colors } from "../../../Estilos/theme"

export default () => ({
  render() {
    return (
      <>
        <contendor>
          <Radar></Radar>
        </contendor>
        <style jsx>{`
          * {
            background-color: ${colors.base};
          }

          contendor {
            width: 100%;
          }
        `}</style>
      </>
    )
  },
})
