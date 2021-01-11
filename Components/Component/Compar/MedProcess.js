import { colors } from "../../../Estilos/theme"

export default () => ({
  render() {
    return (
      <>
        <div>
          <h2>Medición en proceso</h2>
          <ul>
            <li>Var1</li>
            <li>Var2</li>
            <li>Var3</li>
            <li>Var4</li>
            <li>Var5</li>
            <li>Var6</li>
            <li>Var7</li>
          </ul>
        </div>
        <style jsx>{`
          div {
            background-color: ${colors.white};
            border-radius: 6px;
            width: 100%;
          }

          h2 {
            color: ${colors.violetBase};
            font-size: 20px;
            padding: 5px 0px 0px 20px;
          }
        `}</style>
      </>
    )
  },
})
