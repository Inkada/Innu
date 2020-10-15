import * as firebase from "firebase"
import { useState } from "react"

const firebaseConfig = {
  apiKey: "AIzaSyBZwlbPMrG52-7qRGrD56OqGc3eqD17GFI",
  authDomain: "innu-f0364.firebaseapp.com",
  databaseURL: "https://innu-f0364.firebaseio.com",
  projectId: "innu-f0364",
  storageBucket: "innu-f0364.appspot.com",
  messagingSenderId: "716993039193",
  appId: "1:716993039193:web:e6cba68159687a2ca41a48",
  measurementId: "G-PVHXQXZHLK",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const FiretoAuth = (user) => {
  const { email } = user
  return {
    email,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = FiretoAuth(user)
    onChange(normalizedUser)
  })
}

export default function Client() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    console.log(email, password)
  }

  return (
    <>
      <main>
        <div>
          <label>Correo</label>
          <input
            type="email"
            id="email"
            onChange={(ev) => setEmail(ev.target.value)}
          ></input>
        </div>

        <div>
          <label>Contraseña</label>
          <input
            type="password"
            id="password"
            onChange={(ev) => setPassword(ev.target.value)}
          ></input>
        </div>

        <div>
          <button onClick={submit}>Confirmar</button>
        </div>
      </main>
      <style jsx>{`
        main {
          font-family: Poppins;
        }

        div {
          margin-top: 20px;
        }

        input {
          margin-left: 20px;
        }

        input {
          font-family: Poppins;
        }
      `}</style>
    </>
  )
}
