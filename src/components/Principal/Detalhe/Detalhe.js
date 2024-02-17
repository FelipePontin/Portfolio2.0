import React from "react";
import styles from './Detalhe.module.css'

import Risco from '../../../images/Risco.svg'
import SetaExperiencia from '../../../images/SetaExperiencia.svg'
import Coracao from '../../../images/Coracao.svg'

const Detalhe = () => {
    return (
        <section className={styles.Detalhe}>
            <h1 className={styles.titulo}>
                <img className={styles.seta} src={SetaExperiencia}/>
                <img className={styles.risco} src={Risco}/>
                O <span className={styles.destaque}>detalhe importa</span> na experiência do usuário 
            </h1>
            <p className={styles.subtitulo}>Todos os pequenos elementos que compõem o site são de extrema importância</p>
        </section>
    )
}

export default Detalhe
