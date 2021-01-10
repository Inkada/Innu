import { useEffect, useState } from "react"
//import Client, { onAuthStateChanged } from "../Firebase/client"

export default function Login() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  return (
    <>
      <h1>Soy login</h1>
      <Client>mi nombre es</Client>
      <div>
        <div>Bienvenido</div>
        {user === null && <div>ya inició sesion</div>}
        {user && user.avatar && (
          <div>
            <div>ya inició sesion</div>
          </div>
        )}
      </div>

      <style jsx>{`
        hi {
          font-size: 2000px;
        }
      `}</style>
    </>
  )
}
