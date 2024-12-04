import React from "react"
import styles from './Apresentacao.module.css'

const Apresentacao = () => {
    return (
        <>
            <section className={styles.Apresentacao}>
                <p className={styles.titulo}>DESENVOLVEDOR FRONT-END & UI/UX DESIGN</p>
                <h1 className={styles.nome}>Felipe Panebianco Pontin</h1>
                <p className={styles.subtitulo}>Criando websites e interfaces únicas com objetivo de melhorar a experiência do usuário.</p>
                <a href='https://www.linkedin.com/in/felipepanebiancopontin/' target='_blank'><button className={styles.botao}>Conhecer</button></a>
            </section>
            <div className={styles.luz}></div>
        </>
    )
}

export default Apresentacao
