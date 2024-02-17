import React from "react"
import styles from './Ajuda.module.css'

import Layout from '../../../images/Layout.svg'
import Cafe from '../../../images/Cafe.svg'

const Ajuda = () => {
    return (
        <section className={styles.Ajuda}>
            <h1 className={styles.titulo}>
                Como eu posso <span className={styles.destaque}>te ajudar?</span>
            </h1>
            <div className={styles.divisoesAjuda}>
                <div className={styles.divisaoAjuda}>
                    <div className={styles.divisaoInformacao}>
                        <p className={styles.tituloAjuda}>Eu quero uma Landing Page</p>
                        <span className={styles.subtituloAjuda}>Desenvolverei uma Landing Page para o seu negócio com um design moderno e atraente para gerar engajamento.</span>
                        <button className={styles.botaoAjuda}>Saber Mais</button>
                    </div>
                    <img className={`${styles.imagemAjuda} ${styles.primeiraImagemAjuda}`} src={Layout}/>
                </div>
                <div className={styles.divisaoAjuda}>
                    <div className={styles.divisaoInformacao}>
                        <p className={styles.tituloAjuda}>Eu quero bater um papo</p>
                        <span className={styles.subtituloAjuda}>Se você tem uma ideia de projeto ou tem uma proposta de trabalho, clique no botão abaixo, será um prazer conversar com você.</span>
                        <button className={styles.botaoAjuda}>Contato</button>
                    </div>
                    <img className={`${styles.imagemAjuda} ${styles.segundaImagemAjuda}`} src={Cafe}/>
                </div>
            </div>
        </section>
    )
}

export default Ajuda
