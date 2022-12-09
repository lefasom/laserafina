import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.info}>
            <span>
                <h4>Ubicacion</h4>
                <p>Upper Level, Overseas Passenger Terminal, The Rocks, Sydney 2000 phone: 02 9251 5600</p>
            </span>
            <span>
                <h4>Horarios</h4>
                <p>LUNCH Saturday and Sunday Reservations from 12pm to 1.30pm DINNER Thursday to Sunday Reservations from 6pm to 8.45pm</p>
            </span>
            <span>
                <h4>Redes Sociales</h4>
                <p>facebook icono, instagram icono, twitter icono, etc</p>
            </span>
            <span>
                <h4>Otra informacion</h4>
                <p>algo....</p>
            </span>
        </div>
        <div className={styles.footer}>
            <h4>© LA SERAFINA 2022. ALL RIGHTS RESERVED.</h4>
        </div>
    </div>
  )
}
