import React from "react"
import styles from './CriandoExperiencia.module.css'
import ImagemCiclo from '../../../images/Ciclo.png'

const CriandoExperiencia = () => {
    return (
        <section className={styles.CriandoExperiencia}>
            <div className={styles.divisao}>
                <h1 className={styles.titulo}>Criando <span className={styles.destaque}>experiências incríveis</span></h1>
                <p className={styles.subtitulo}>Transformando desafios em soluções brilhantes, com inovação, qualidade, simplicidade e um design que se destaca em cada detalhe.</p>
            </div>
            <img className={styles.imagem} src={ImagemCiclo}/>
        </section>
    )
}

export default CriandoExperiencia
