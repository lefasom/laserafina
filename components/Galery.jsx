import styles from '../styles/galery.module.css'

const imgArr = [
    {id: 1, heading: 'MENÚ', src: 'example-img/1.jpeg', text: `Quay es una progresión de ingredientes raros y hermosos donde la textura, el sabor y la armonía son primordiales.
    <br/>
        Continuamente inspirado por la naturaleza, el proceso creativo del chef Peter Gilmore comienza trabajando en estrecha colaboración con los agricultores, pescadores, productores y artesanos que cultivan productos a medida exclusivamente para Quay. Para cada plato, el crecimiento de cada elemento y la selección de cada pieza de cerámica se considera y elabora cuidadosamente para su papel en la experiencia gastronómica.
    <br />

        Quay ofrece un pasaje personal e interactivo para los comensales a través de la evolución culinaria de Peter Gilmore.`},
    {id: 2, heading: 'EVENTS', src: 'example-img/7.jpeg', text: `Celebrate at one of Australia’s most awarded restaurants, with panoramic views encompassing the Sydney Harbour Bridge and Sydney Opera House. From intimate dinner parties in the Private Dining Room, to long lunches in the spectacular Upper Tower, to large cocktail events in The Green Room – Quay delivers an immersive dining experience with views like no other.    Quay ofrece un pasaje personal e interactivo para los comensales a través de la evolución culinaria de Peter Gilmore.`},
    {id: 3, heading: 'MENÚ', src: 'example-img/1.jpeg', text: `Quay es una progresión de ingredientes raros y hermosos donde la textura, el sabor y la armonía son primordiales.
    <br/>
        Continuamente inspirado por la naturaleza, el proceso creativo del chef Peter Gilmore comienza trabajando en estrecha colaboración con los agricultores, pescadores, productores y artesanos que cultivan productos a medida exclusivamente para Quay. Para cada plato, el crecimiento de cada elemento y la selección de cada pieza de cerámica se considera y elabora cuidadosamente para su papel en la experiencia gastronómica.
    <br />

        Quay ofrece un pasaje personal e interactivo para los comensales a través de la evolución culinaria de Peter Gilmore.`},
    {id: 4, heading: 'EVENTS', src: 'example-img/11.jpeg', text: `Celebrate at one of Australia’s most awarded restaurants, with panoramic views encompassing the Sydney Harbour Bridge and Sydney Opera House. From intimate dinner parties in the Private Dining Room, to long lunches in the spectacular Upper Tower, to large cocktail events in The Green Room – Quay delivers an immersive dining experience with views like no other.    Quay ofrece un pasaje personal e interactivo para los comensales a través de la evolución culinaria de Peter Gilmore.`}
]

function Galery() {


   
        return (<>
        {imgArr?.map(({id, src, text, heading}) => (
            <div className={id % 2 !== 0 ? styles.galery : styles.galeryReverse} key={id}>
                <img className={styles.img} src={src} alt="" />
                <div className={styles.detail}>
                    <h2>{heading}</h2>
                    <p dangerouslySetInnerHTML={{__html: text}}/>
                </div>
            </div>))
        }
            {/* <div className={styles.galery}>
            <img className={styles.img} src="example-img/7.jpeg" alt="" />

                <div className={styles.detail}>
                    <h2>EVENTS</h2>
                    <p>
                    Celebrate at one of Australia’s most awarded restaurants, with panoramic views encompassing the Sydney Harbour Bridge and Sydney Opera House. From intimate dinner parties in the Private Dining Room, to long lunches in the spectacular Upper Tower, to large cocktail events in The Green Room – Quay delivers an immersive dining experience with views like no other.    Quay ofrece un pasaje personal e interactivo para los comensales a través de la evolución culinaria de Peter Gilmore.
                    </p>
                </div>

            </div>
            <div className={styles.galery}>
                <img className={styles.img} src="example-img/1.jpeg" alt="" />
                <div className={styles.detail}>
                    <h2>MENÚ</h2>
                    <p>
                    
                        Quay es una progresión de ingredientes raros y hermosos donde la textura, el sabor y la armonía son primordiales.
                    <br/>
                        Continuamente inspirado por la naturaleza, el proceso creativo del chef Peter Gilmore comienza trabajando en estrecha colaboración con los agricultores, pescadores, productores y artesanos que cultivan productos a medida exclusivamente para Quay. Para cada plato, el crecimiento de cada elemento y la selección de cada pieza de cerámica se considera y elabora cuidadosamente para su papel en la experiencia gastronómica.
                    <br />
              
                        Quay ofrece un pasaje personal e interactivo para los comensales a través de la evolución culinaria de Peter Gilmore.
                    </p>
                </div>
            </div>
            <div className={styles.galery}>
                <img className={styles.img} src="example-img/11.jpeg" alt="" />
                <div className={styles.detail}>
                    <h2>EVENTS</h2>
                    <p>
                    Celebrate at one of Australia’s most awarded restaurants, with panoramic views encompassing the Sydney Harbour Bridge and Sydney Opera House. From intimate dinner parties in the Private Dining Room, to long lunches in the spectacular Upper Tower, to large cocktail events in The Green Room – Quay delivers an immersive dining experience with views like no other.    Quay ofrece un pasaje personal e interactivo para los comensales a través de la evolución culinaria de Peter Gilmore.
                    </p>
                </div>
            </div> */}
         </> )
    }



export default Galery                                                                                                   