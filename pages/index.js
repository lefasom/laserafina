import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Logo from '../components/Logo.jsx'
import { useState, useEffect } from 'react'
import styles from '../styles/logo.module.css'


export default function Home() {
  const [ charger, setCharger] = useState('block')
  const [ sidebar, setSidebar] = useState(false)

  const navMod = () => {
    setSidebar(!sidebar)
  }
  useEffect(() => {
      setTimeout(function charger(){
          setCharger('hidden')
      },10000)
  }, [])


  return (
    <>
    <style jsx>
      {`
      .navbar{
        display: flex;
        flex-direction: column;
      }
      .hidden{
        opacity:0;
      }
      .nav{
        background: rgba(0,0,0,.6);
        width: 100vw;
        height:60px;
        position: fixed;
        top:0;

      }
      .nav button{
        color:#eee;
        background: transparent;
        border:0;
        font-size: 34px;
        margin: 10px ;
        position: fixed;
        cursor:pointer;
      }
      .navOn{
        background: rgba(0,0,0,.6);
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: -140%;
        top: -17px;
        transition: 850ms;
        color:#eee;
      }
      .navOn li{
        margin: 30px 5px;
        font-family: sans-serif;
        font-size: 20px;  
        list-style: none;
        color:#eee;
      }

      .navOff li{
        margin: 30px 5px;
        font-family: sans-serif;
        font-size: 20px;  
        list-style: none;
        color:#eee;
      }
       .navOn button{
        color:#eee;
        background: transparent;
        border:0;
        font-size: 34px;
        position: fixed;
        cursor:pointer;
        position: absolute;
        right: 30px;        
      }
      .navOff button{
        color:#eee;
        background: transparent;
        border:0;
        font-size: 34px;
 
      }
      .navOff{
        background: rgba(0,0,0,.6);
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: -17px;
        color:#eee;
        transition: 850ms;
      }
      .fotoPrincipal img {
        width: 100vw;
        height: 500px;
        position: absolute;
        top: 0;
        z-index: -1;
        object-fit: cover;
      }
      .tituloLogo{
        position: relative;
        top: -60px;
        left: 33%;
      }
      .tituloLogo h1{
        font-family: 'Bebas Neue', cursive;

        color: #DDD;
        font-weight: 400;
        margin: auto;
        padding: 0;
        font-size: 28px;
        letter-spacing: 2px;

             


      }
      .tituloLogo span{
        color: #82cd47;
      }
      .tituloLogo h4{
        font-family: 'Staatliches', cursive;
        margin: auto;

        color: #DDD;
        font-weight: 100;
        letter-spacing: 20px;
        font-size: 10px;
        padding: 0;
        box-sizing: border-box;
             

      }
      `}
    </style>

   {/* <div className={charger}>*/}
   {/*   <div className={styles.container}>
      </div>*/}
    {/*</div>*/}

    <div className="nav">

      <button onClick={navMod}>
       &#8801;
      </button>
          <div className="tituloLogo">
            <h1><span>La</span> Serafina</h1>
            <h4>Market</h4>
          </div>
 

      <nav className="navBar">
        <ul className={sidebar ? "navOff" : "navOn"}>
          <button onClick={navMod}>
            x
          </button>
          <li>La Serafina</li>
          <li>Cocina</li>
          <li>Almacen</li>
          <li>Proveeduria</li>
          <li>Informate</li>

        </ul>
      </nav>
    </div>
    <div className="fotoPrincipal">
      <img src="/fondo-serafina.jpeg" alt="" />
    </div>
      
        <div className={styles.containerLogo}>
          <div className={styles.name}>
            <h1><span>La</span> Serafina</h1>
            <h4>Market</h4>
          </div>
         </div>
        
     
     <li>HOLA</li>
          <li>Cocina</li>
          <li>Almacen</li>
          <li>Proveeduria</li>
          <li>Informate</li>
          <li>La Serafina</li>
          <li>Cocina</li>
          <li>Almacen</li>
          <li>Proveeduria</li>
          <li>Informate</li> <li>La Serafina</li>
          <li>Cocina</li>
          <li>Almacen</li>
          <li>Proveeduria</li>
          <li>Informate</li> <li>La Serafina</li>
          <li>Cocina</li>
          <li>Almacen</li>
          <li>Proveeduria</li>
          <li>Informate</li> <li>La Serafina</li>
          <li>Cocina</li>
          <li>Almacen</li>
          <li>Proveeduria</li>
          <li>Informate</li>
        {/*<Logo />*/}
    </>
  )
}
