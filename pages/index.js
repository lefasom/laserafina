import Logo from '../components/Logo'
import Galery from '../components/Galery'
import Layout from '../components/Layout'



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
    <Layout>
      <div className="fotoPrincipal">
        <img src="/fondo-serafina.jpeg" alt="" />
      </div>
      <Logo />
      <Galery />
    </Layout>
    </>
  )
}
