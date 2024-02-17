import React from "react"
import styles from './TragaSeuProjeto.module.css'
import ImagemPrototipo from '../../../images/Prototipo.png'

const TragaSeuProjeto = () => {
    return (
        <section className={styles.TragaSeuProjeto}>
            <img className={styles.imagem} src={ImagemPrototipo}/>
            <div className={styles.divisao}>
                <h1 className={styles.titulo}>Traga o seu projeto e farei ele se <span className={styles.destaque}>tornar real</span></h1>
                <p className={styles.subtitulo}>Você tem uma ideia incrível? Um projeto que está apenas esperando para ganhar vida? Estou aqui para ajudar a transformar suas ideias em realidade!</p>
                <button className={styles.botao}>Contato</button>
            </div>
        </section>
    )
}

export default TragaSeuProjeto
