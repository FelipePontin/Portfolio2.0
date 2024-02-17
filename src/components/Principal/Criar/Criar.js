import React from "react"
import styles from './Criar.module.css'

import Estrela from '../../../images/Estrela.svg'

const Criar = () => {
    return (
        <section className={styles.Criar}>
            <h1 className={styles.titulo}>Vamos criar algo excepcional juntos 🚀</h1>
            <button className={styles.botao}>BORA!</button>
        </section>
    )
}

export default Criar
