import Head from 'next/head'
import AppLayout from '../Components/Layout/Lay'
import { colors } from '../Estilos/theme'


//import CsvReader from '../Components/Component/CsvReader/CsvReader'

import Nav from '../Components/Component/Nav/Nav'
//import Chart from '../Components/Component/Chart/Chart'


export default function Home() {
  
  return (
    
    <>       
      <Head>
        <title>Innu </title>
        <link rel="icon" href="/innufavicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,800&display=swap" rel="stylesheet" />
      </Head>


      <main>
      <Nav></Nav>
      <div>
      <p>Dashboard</p>
      <article>
      <section>Hey</section>
      <section>que</section>
      <section>tal</section>
      <section>soy una seccion</section>
      </article>
      </div>
      
      </main>

      <footer>
       
      </footer>
      

<style jsx>{`

main{
  display: flex;
  flex-direction: row; 

}
article{ background-color: green}

section{ background-color: blue}

p{ font-size:30px;

}

`}</style>


 </>
  )
}

  
  
