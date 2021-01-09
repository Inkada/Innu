import Bar from "../Charts/Bar"
import { colors } from "../../../Estilos/theme"

export default () => ({
  render() {
    return (
      <>
        <div>
          <contendor>
            <Bar></Bar>
          </contendor>
        </div>
        <style jsx>{`
          contendor {
            width: 100%;
          }

          div {
            background-color: ${colors.darkViolet};
          }
        `}</style>
      </>
    )
  },
})
