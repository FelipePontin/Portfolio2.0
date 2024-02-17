import React from "react"

import styles from './Conhecimentos.module.css'

import { listaConhecimentos } from "./listaConhecimentos";

import divisaoGrid from '../../../images/Grid2.png'

import { FaBrain } from "react-icons/fa";

const Conhecimentos = () => {
    return (
        <section className={styles.Conhecimentos}>
            <div className={styles.efeito}>
                <div className={styles.divisaoIcone}>
                    <FaBrain className={styles.icone}/>
                </div>
            </div>
            <h1 className={styles.titulo}>Meus <span className={styles.destaque}>conhecimentos</span></h1>
            <p className={styles.subtitulo}>Linguagens de programações, frameworks e ferramentas que tenho conhecimento</p>
            <div className={styles.divisaoConhecimentos}>
                <img className={styles.grid} src={divisaoGrid}/>
                {listaConhecimentos.map(conhecimento => {
                    return (
                        <div className={styles.conhecimento}>
                            {conhecimento.icone}
                            <p className={styles.nomeConhecimento}>{conhecimento.nome}</p>
                        </div>
                    )
                })}
                
            </div>
        </section>
    )
}

export default Conhecimentos
