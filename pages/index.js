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

<nav>
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


        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
