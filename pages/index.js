import Logo from '../components/Logo'
import Galery from '../components/Galery'
import Layout from '../components/Layout'


export default function Home() {
  const contentArray = [
    {
        id: 1,
        heading: 'ALBERTO LOPEZ',
        src: 'example-img/beto.png',
        text: `Beto es una persona apacionada por el deporte, la vida saludable y la buena alimentación.`
    },
    {
        id: 2,
        heading: 'EVENTS',
        src: 'example-img/7.jpeg',
        text: `Celebrampanner partcular Upper T dining experience with views like no other. 
        Quay ofrece un pasaje personal e interactivo para los comensales a través de la evo
        lución culinaria de Peter Gilmore.`
    },
    {
        id: 3,
        heading: 'MENÚ',
        src: 'example-img/1.jpeg',
        text: `Quay es una progresión de ingredientes raros y hermosos d
        onde la textura, el sabor y la armonía son primordiales.
        Quay ofrece un pasaje personal e interactivo para los comensales a travé
        s de la evolución culinaria de Peter Gilmore.`
    },
    {
        id: 4,
        heading: 'EVENTS',
        src: 'example-img/11.jpeg',
        text: `Celebrate at one of Australia’s most awarded restaurants,
        with panoramic views encompassing the Sydney Harbour Bridge and Sydney Opera House
        . From intimate dinner parties in the Private Dining Room, to long lunches in the s
        pectacular Upper Tower, to large cocktail events in The Green Room 
        Quay delivers an immersive dining experience with views like no other. 
        Quay ofrece un pasaje personal e interactivo para los comensales a travé
        s de la evolución culinaria de Peter Gilmore.`
    }
]

  return (
    
    <>
    <style jsx>
    {`
        .fotoPrincipal img {
          object-fit: cover;
          height:100vh;
          
        }
    `}  
    </style>   
    <Layout>
      <div className="fotoPrincipal">
        <img src="example-img/6.png" alt="" />
      </div>
      <Logo />
      <Galery content={contentArray}/>
    </Layout>
    </>
  )
}
