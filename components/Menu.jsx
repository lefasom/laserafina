import React from 'react'
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
        margin-top: 32px;
        font-family: sans-serif;
        font-size: 20px;  
        list-style: none;
        color:#eee;
      }
    
    
      .navOff li{
        margin-top: 32px;
        font-family: sans-serif;
        font-size: 20px;  
        list-style: none;
        color:#eee;
      }
      
      .navOff .lista{
        margin-top: 75px;
      }
      .navOn .lista{
        margin-top: 75px;
      }
       .navOn button{
        color:#eee;
        background: transparent;
        border:0;
        font-size: 34px;
        position: fixed;
        cursor:pointer;
        position: absolute;
        left: 5px;
        
      }
      .navOff button{
        color:#eee;
        background: trasparent;
        border:0;
        font-size: 34px;
        position: absolute;
        left: 5px;
    
      }
      .navOff{
        background:  rgba(0,0,0,.6);
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
          <li>La Serafina</li>
          <li>Cocina</li>
          <li>Almacen</li>
          <li>Proveeduria</li>
          <li>Informate</li>
        </div> 
      </ul>
    </nav>
  </div>
  </div>
  )
}

export default Menu