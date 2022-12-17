import React from 'react'
import styles from '../styles/menu.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'


function MenuCopy() {
  
  const [ sidebar, setSidebar] = useState(false)
  const [ navBar, setNavBar] = useState(false)


  const navMod = () => {
    setSidebar(!sidebar)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)

  }, [])

   const changeBackground = () =>{
    if (window.scrollY >= 80) {
      setNavBar(true)
    }else {
      setNavBar(false)
    }
  }

  return (<div>
    <style>{`
  
    .navbar{
        display: flex;
        flex-direction: column;
      }
     
      .nav{
        background: rgba(0, 0, 0, 1);
        width: 100%;
        height: 60px;
        position:fixed;
    
      }
     


      .nav .button1{
        color:#eee;
        background: transparent;
        border:0;
        font-size: 44px;
        margin: auto 10px;
        position: fixed;
        cursor:pointer;
      }
      .navHidden .button1{
        color:#eee;
        z-index:99999999;
        background: transparent;
        border:0;
        font-size: 44px;
        margin: 10px;
        margin-top: -100px;
        position: fixed;
        cursor:pointer;
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
      .navOn{
        background-color: rgb(246, 240, 240);

        width: 100%;
        height: 100vh;
        position: fixed;
        left: -140%;
        top: -17px;
        transition: 800ms;
        color:#333;
    
      }
      .navOn li{
        margin-top: 23px;
        font-family: sans-serif;
        font-size: 25px;  
        list-style: none;
        color:#333;
      }
    
    
      .navOff li{
        margin-top: 23px;
        font-family: sans-serif;
        font-size: 25px;  
        list-style: none;
        color:#333;
      }
      
          
    
      .navOff .lista{
        margin-top: 100px;
      }
      .navOn .lista{
        margin-top: 100px;
      }
       .navOn button{
        color:#333;
        background: transparent;
        border:0;
        font-size: 44px;
        position: fixed;
        cursor:pointer;
        position: absolute;
        left: 5px;
        font-weight:400;
        z-index:9999000000000;

      }
      .navOff button{
        color:#333;
        background: trasparent;
        border:0;
        font-size: 44px;
        position: absolute;
        left: 5px;
        font-weight:400;
        z-index:9999000000000;
      }
      .fotoPrincipal img {
        width: 100%;
        height: 500px;
        position: absolute;
        top: 0;
        z-index: -1;
        object-fit: cover;
      }
      @media(min-width:700px) {
      
        .navOff{
       
          width:35%;
      
       
        }
      }

    `}</style>  
    <div className="nav">

    <button  className="button1" onClick={navMod}>
     &#8801;
    </button>

    <nav className="navBar">
      <ul className={sidebar ? "navOff" : "navOn"}>
        <button onClick={navMod}>
          x
        </button>
        <div className="lista">
          <div className={styles.lista}>
            <li>
              <Link href="/" >La Serafina</Link>
            </li>
            <li>
              <Link href="Cocina" >Cocina</Link>
            </li>
            <li>
              <Link href="Almacen" >Almacen</Link>
            </li>
            <li>
              <Link href="FYV" >Frutas y Verduras</Link>
            </li>
            <li>
              <Link href="FrutosSecos" >Frutos Secos</Link>
            </li>
            <li>
              <Link href="Sorteos" >Sorteos</Link>
            </li>
          </div>
        </div> 
      </ul>
    </nav>
  </div>
  </div>
  )
}

export default MenuCopy