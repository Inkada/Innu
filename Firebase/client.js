import * as firebase from 'firebase'
import {useState,} from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyBZwlbPMrG52-7qRGrD56OqGc3eqD17GFI",
    authDomain: "innu-f0364.firebaseapp.com",
    databaseURL: "https://innu-f0364.firebaseio.com",
    projectId: "innu-f0364",
    storageBucket: "innu-f0364.appspot.com",
    messagingSenderId: "716993039193",
    appId: "1:716993039193:web:e6cba68159687a2ca41a48",
    measurementId: "G-PVHXQXZHLK"
  }

  !firebase.app.length && firebase.initializeApp(firebaseConfig)


  export const loginEmail = () =>{
          const email = new firebase.auth.AuthCredential()
          return firebase.auth().signInWithPopup(email)
        
            
          }

    
export default function Client (){



const [email , setEmail] = useState('');
const [password , setPassword] = useState('');


const submit= async () =>{
  await firebase.auth().createUserWithEmailAndPassword(email,password)
}

      return(
  
          <>
  
      <label>Correo</label>
      <input type="email"  id="email" onChange={(ev)=> setEmail(ev.target.value)}></input>
      <label>Contraseña</label>
      <input type="password"  id="password" onChange={(ev)=> setPassword(ev.target.value)}></input>
      <button onClick={submit}>Confirmar</button>


  
  
    <style jsx>{`
  
  input{
    background-color: aquamarine
  }
  
  
  `}</style>
  
          </>
      )
  
  
  }

