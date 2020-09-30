import Head from 'next/head'
import styles from '../styles/Home.module.css'
import link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Innu </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Innu
           
           <a href="https://nextjs.org">Next.js!
           
           </a>
      
        </h1>

          <nav className={styles.nav}>
          <ul>
            <li>Dashboard</li>
            <li>Población</li>
            <li>Análisis</li>
            <li>Filtros</li>
            <li>Proyectos</li>
            <li>Planes</li>
          </ul>
          <ul>
            <li>Configuración</li>
            <li>Ayuda</li>
            <li>Salir</li>
          </ul>

          </nav>

      </main>

      <footer>
       
      </footer>
    </div>
  )
}
