import React from "react"
import styles from './Apresentacao.module.css'

const Apresentacao = () => {
    return (
        <>
            <section className={styles.Apresentacao}>
                <p className={styles.titulo}>DESENVOLVEDOR FRONT-END & UI/UX DESIGN</p>
                <h1 className={styles.nome}>Felipe Panebianco Pontin</h1>
                <p className={styles.subtitulo}>Criando websites e interfaces únicas com objetivo de melhorar a experiência do usuário.</p>
                <button className={styles.botao}>Conhecer</button>
            </section>
            <div className={styles.luz}></div>
        </>
    )
}

export default Apresentacao
