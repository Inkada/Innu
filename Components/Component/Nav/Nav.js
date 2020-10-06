import React from 'react'
import AppLayout from '../../Layout/Lay'
import link from 'next/link'


 

export default function Nav(){
  return(

    <AppLayout>
    
      <>
    
    <nav >
            <img src="/INNU.png" alt="Logo"></img>
            <br></br><br></br>
            <description>Midiendo la cultura de innovación en las empresas</description>
            <p>DASHBOARD</p>
          <ul>
          <li><img src="/poblacion.png" alt="Logo"></img>Población</li>
            <li><img src="/analisis.png" alt="Logo"></img>Análisis</li>
            <li><img src="/filtros.png" alt="Logo"></img>Filtros</li>
            <li><img src="/proyectos.png" alt="Logo"></img>Proyectos</li>
            <li><img src="/planes.png" alt="Logo"></img>Planes</li>
          </ul>
          <ul>
            <li><img src="/configuracion.png" alt="Logo"></img>Configuración</li>
            <li><img src="/ayuda.png" alt="Logo"></img>Ayuda</li>
            <li><img src="/salir.png" alt="Logo"></img>Salir</li>
          </ul>

          </nav>
          </>

          <style jsx>{`      
     nav{
      display: flow-root;
      flex-direction: column;
      position: absolute;
      width: 16.7%;
      height: 100vh;
      left: 0px;
      top: 0px;
      background-color: #FFFFFF;
      cursor: pointer;
      text-align: center;
      font-family: 'Poppins', sans-serif;
      font-size: 15px;
      background-color:aqua;
  
    }
  
    nav description{
      font-size: 6px;
      text-align: le;
    }
    
    nav p{
      margin-top: 1vh;   
      
    }
    
    nav img{
      padding-top: 5vh;
    }
    
    nav ul{list-style-type:none;
      text-align: left ;
      
    }
    
    nav li{padding: 1%;
       
  }
  
  nav li img {padding-right: 20px;}
    
    
    nav li:hover{
      background-color: red;
      font-size: larger;
    }

        
        `}</style>

          </AppLayout>
        
        

          )

}