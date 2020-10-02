import React from 'react'
import styles from '../../../styles/Home.module.css'
import link from 'next/link'




export default function Nav(){
  return(
    <nav className={styles.nav}>
            <img src="/INNU.png" alt="Logo"></img>
            <p>DASHBOARD</p>
          <ul>
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
)
}