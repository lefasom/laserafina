import React from 'react'
import styles from '../styles/galery.module.css'

function Galery() {
  
  return (<>
    <div className={styles.galery}>
        <img src="example-img/3.jpeg" alt="" />
        <div className={styles.detail}>
            <h2>MENÚ</h2>
            <p>
            
                Quay es una progresión de ingredientes raros y hermosos donde la textura, el sabor y la armonía son primordiales.
                </p><p>
                Continuamente inspirado por la naturaleza, el proceso creativo del chef Peter Gilmore comienza trabajando en estrecha colaboración con los agricultores, pescadores, productores y artesanos que cultivan productos a medida exclusivamente para Quay. Para cada plato, el crecimiento de cada elemento y la selección de cada pieza de cerámica se considera y elabora cuidadosamente para su papel en la experiencia gastronómica.
                </p><p>
                Quay ofrece un pasaje personal e interactivo para los comensales a través de la evolución culinaria de Peter Gilmore.
            </p>
        </div>
    </div>
    <div className={styles.galery}>
        <div className={styles.detail}>
            <h2>MENÚ</h2>
            <p>
            
                Quay es una progresión de ingredientes raros y hermosos donde la textura, el sabor y la armonía son primordiales.
                </p><p>
                Continuamente inspirado por la naturaleza, el proceso creativo del chef Peter Gilmore comienza trabajando en estrecha colaboración con los agricultores, pescadores, productores y artesanos que cultivan productos a medida exclusivamente para Quay. Para cada plato, el crecimiento de cada elemento y la selección de cada pieza de cerámica se considera y elabora cuidadosamente para su papel en la experiencia gastronómica.
                </p><p>
                Quay ofrece un pasaje personal e interactivo para los comensales a través de la evolución culinaria de Peter Gilmore.
            </p>
        </div>
        <img src="example-img/3.jpeg" alt="" />
    </div>
 </> )
}

export default Galery                                                                                                   