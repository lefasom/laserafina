import styles from '../styles/slider.module.css'
import { useState, useEffect } from "react"

export default function Slider({content}) {

  const [slide, setSlide] = useState(1)

  const nextBtn = () => {
    if(slide === content.length) setSlide(1)
    else setSlide(prev => prev + 1)
  }

  useEffect(()=>{
    const interval = setInterval(() => {
      nextBtn()
    }, 5000);
    return () => clearInterval(interval)
  })

  return (
  <div className={styles.container}>
    <div className={styles.sliderContainer}>

        {content.map(({id, src}) => (
        <div key={id}>
            <img
              className={id === slide ? `${styles.display} ${styles.fade}` : styles.noDisplay} 
              src={src}
              alt='sliderImages'/>
        </div>))}

        <div className={styles.dotContainer}>
        {content.map(({id}) => (
            <span key={id} onClick={()=>setSlide(id)} className={id === slide ? `${styles.dot} ${styles.active}` : styles.dot}></span>
        ))}
        </div>

    </div>
    <div className={styles.galery}>
    
                <div className={styles.detail}>
                    <h2>EMPANADAS</h2>
                    <p>Empanadas al horno de barro con masa hojaldrada</p> 
                       </div>
            </div>
  </div>)
}
