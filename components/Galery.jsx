import styles from '../styles/galery.module.css'
import { imgArr } from './imgArr'

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
         </> )
    }



export default Galery                                                                                                   