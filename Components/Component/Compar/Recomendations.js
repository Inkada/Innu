import { colors } from "../../../Estilos/theme"

export default () => ({
  render() {
    return (
      <>
        <div>
          <h2>Recomendaciones</h2>
          <article>
            <p>Variable a trabajar</p>
            <p>Actividad3</p>{" "}
          </article>
          <article>
            <p>Variable a trabajar</p>
            <p>Actividad3</p>{" "}
          </article>
          <article>
            <p>Variable a trabajar</p>
            <p>Actividad3</p>
          </article>
        </div>
        <style jsx>{`
          contendor {
            width: 90%;
          }

          div {
            background-color: ${colors.white};
            border-radius: 6px;
            width: 100%;
          }
          article {
            display: flex;
            flex-direction: row;
          }
          h2 {
            color: ${colors.darkViolet};
            font-size: 20px;
            padding: 5px 0px 0px 20px;
          }
        `}</style>
      </>
    )
  },
})
