import React from "react"
import styles from './Projetos.module.css'

import { listaProjetos } from "./listaProjetos";

import { FaRocket } from "react-icons/fa";

const Projetos = () => {

    return (
        <section className={styles.Projetos}>
            <div className={styles.efeito}>
                <div className={styles.divisaoIcone}>
                    <FaRocket className={styles.icone}/>
                </div>
            </div>
            <h1 className={styles.titulo}><span className={styles.destaque}>Projetos</span> que desenvolvi</h1>
            <p className={styles.subtitulo}>Alguns projetos que desenvolvi durante a minha carreira de desenvolvedor</p>
            <div className={styles.divisaoProjetos}>
                {listaProjetos.map(projeto => {
                    return (
                        <div className={styles.projeto}>
                            <div style={{background:projeto.cor}} className={styles.backgroundProjeto}></div>
                            <div className={styles.conteudoProjeto}>
                                <img className={styles.iconeProjeto} src={projeto.icone}/>
                                <p className={styles.tituloProjeto}>{projeto.nome}</p>
                                <p className={styles.subtituloProjeto}>{projeto.subtitulo}</p>
                                <div className={styles.divisaoBotoesProjeto}>
                                    <a href={projeto.demo} target='_blank'><button className={styles.botaoProjeto}>Demo</button></a>
                                    <a href={projeto.repositorio} target='_blank'><button className={styles.botaoProjeto}>Repositório</button></a>
                                </div>
                                <div className={styles.divisaoLinguagem}>
                                    {projeto.iconeLinguagem}
                                    <p className={styles.nomeLinguagemProjeto}>{projeto.linguagem}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projetos
