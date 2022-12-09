import Menu from '../components/Menu'
import Logo from '../components/Logo'
import Galery from '../components/Galery'



export default function Home() {


  return (
    <>
    <style jsx>
    {`
        .fotoPrincipal img {
          width: 100vw;
        }
    `}  
    </style>   
    <Menu />
    <div className="fotoPrincipal">
      <img src="/fondo-serafina.jpeg" alt="" />
    </div>
    <Logo />
     <Galery />
    </>
  )
}
