import React from 'react'
import styles from '../styles/menu.module.css'

import { useState, useEffect } from 'react'
function Menu() {

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

  return (<div>
    <style>{`
    .navbar{
        display: flex;
        flex-direction: column;
      }
      .hidden{
        opacity:0;
      }
      .nav{
        background: rgba(0,0,0,.6);
        width: 100%;
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
        background-color: rgb(246, 240, 240);

        width: 100%;
        height: 100vh;
        position: fixed;
        left: -140%;
        top: -17px;
        transition: 850ms;
        color:#333;
    
      }
      .navOn li{
        margin-top: 32px;
        font-family: sans-serif;
        font-size: 25px;  
        list-style: none;
        color:#333;
      }
    
    
      .navOff li{
        margin-top: 32px;
        font-family: sans-serif;
        font
        font-size: 25px;  
        list-style: none;
        color:#333;
      }
      
          
    
      .navOff .lista{
        margin-top: 75px;
      }
      .navOn .lista{
        margin-top: 75px;
      }
       .navOn button{
        color:#333;
        background: transparent;
        border:0;
        font-size: 34px;
        position: fixed;
        cursor:pointer;
        position: absolute;
        left: 5px;
        
      }
      .navOff button{
        color:#333;
        background: trasparent;
        border:0;
        font-size: 34px;
        position: absolute;
        left: 5px;
    
      }
      .navOff{
        background-color: rgb(246, 240, 240);
        width: 100%;
        height: 100vh;
        position: fixed;
        left: 0;
        top: -17px;
        color:#333;
        transition: 800ms;
     
      }
    
      .fotoPrincipal img {
        width: 100%;
        height: 500px;
        position: absolute;
        top: 0;
        z-index: -1;
        object-fit: cover;
      }

    `}</style>  
    <div className="nav">

    <button onClick={navMod}>
     &#8801;
    </button>

    <nav className="navBar">
      <ul className={sidebar ? "navOff" : "navOn"}>
        <button onClick={navMod}>
          x
        </button>
        <div className="lista">
          <div className={styles.lista}>
            <li>Cocina</li>
            <li>Almacen</li>
            <li>Frutas y Verduras</li>
            <li>Proveeduria</li>
            
          </div>
        </div> 
      </ul>
    </nav>
  </div>
  </div>
  )
}

export default Menu