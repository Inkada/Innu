import { useState } from "react"
const useData = () => {
  const { data, setData } = useState([])

  const onChangeData = (dt) => {
    setData(dt)
  }

  ascendenteParticipantes = () => {
    var arreglo = this.state.filterData
    arreglo = arreglo.sort(function (a, b) {
      return a[1] > b[1] ? 1 : -1
    })

    this.setState({ filterData: arreglo })

    this.forceUpdate()
  }

  return data, setData
}

export default useData
