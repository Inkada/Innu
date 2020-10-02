import Head from 'next/head'
import styles from '../styles/Home.module.css'


import Nav from '../Components/Component/Nav/Nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Innu </title>
        <link rel="icon" href="/innufavicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,800&display=swap" rel="stylesheet" />


      </Head>

      <main className={styles.main}>

      <Nav></Nav>


        <h1 className={styles.title}>
          Dashboard      
        </h1>

       



      </main>

      <footer>
       
      </footer>
    </div>
  )
}
