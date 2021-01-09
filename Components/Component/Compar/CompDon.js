import Bar from "../Charts/Bar"
import { colors } from "../../../Estilos/theme"

export default () => ({
  render() {
    return (
      <>
        <contendor>
          <Bar></Bar>
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
