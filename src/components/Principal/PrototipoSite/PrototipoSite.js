import React, { useState, useEffect } from "react"
import styles from './PrototipoSite.module.css'

import Hexagono from '../../../images/Hexagono.svg'
import Seta from '../../../images/SetaPrototipo.svg'

import { FaHeart, FaUserCircle, FaMapMarkerAlt } from "react-icons/fa";

const PrototipoSite = () => {

    const [cores, setCores] = useState([
        '#3369E7',
        '#8E43E7',
        '#B84592',
        '#FF4F81',
        '#FF6C5F',
        '#FFC168',
        '#2DDE98',
        '#1CC7D0'
    ])

    const [corAtual, setCorAtual] = (useState('#2DDE98'))

    return (
        <section className={styles.PrototipoSite}>
            <h1 className={styles.titulo}>Tudo do <span className={styles.destaque}>seu jeito</span> e como você <span className={styles.destaque}>imagina</span></h1>
            <p className={styles.subtitulo}>Qual estilo combina com você?</p>
            <div className={styles.cores}>
                <img className={styles.seta} src={Seta}/>
                {cores.map((cor, id) => {
                    return (
                        <div onClick={() => setCorAtual(cor)} style={{background:cor}} className={`${styles.cor}`}></div>
                    )
                })}
            </div>
            <div className={styles.background}>
                <div className={styles.prototipo}>
                    <div className={styles.blocoCima}>
                        <div style={{background:corAtual}} className={styles.divisaoIcone}>
                            <img className={styles.hexagono} src={Hexagono} />
                            <FaHeart style={{color:corAtual}} className={styles.iconeHexagono} />
                        </div>
                        <div className={styles.divisaoTexto}>
                            <div className={styles.textoCimaPrototipo}></div>
                            <div className={styles.tituloPrototipo}></div>
                            <div className={styles.conteudoPrototipo}></div>
                            <div className={styles.conteudoPrototipo}></div>
                            <div className={styles.conteudoPrototipo}></div>
                            <div className={styles.conteudoPrototipo}></div>
                            <div className={styles.textoBaixoPrototipo}></div>
                        </div>
                    </div>
                    <div className={styles.blocoBaixo}>
                        <div className={`${styles.divisaoBlocoBaixo} ${styles.divisaoBlocoBaixoEsquerda}`}>
                            <div style={{background:corAtual}} className={styles.divisaoIconeBaixo}>
                                <img className={styles.hexagonoBaixo} src={Hexagono} />
                                <FaUserCircle style={{color:corAtual}} className={styles.iconeHexagonoBaixo} />
                            </div>
                            <div className={styles.divisaoTextoBaixo}>
                                <div className={styles.textoCimaPrototipoBaixo}></div>
                                <div className={styles.tituloPrototipoBaixo}></div>
                                <div className={styles.conteudoPrototipoBaixo}></div>
                            </div>
                        </div>
                        <div className={styles.divisaoBlocoBaixo}>
                            <div style={{background:corAtual}} className={styles.divisaoIconeBaixo}>
                                <img className={styles.hexagonoBaixo} src={Hexagono} />
                                <FaMapMarkerAlt style={{color:corAtual}} className={styles.iconeHexagonoBaixo} />
                            </div>
                            <div className={styles.divisaoTextoBaixo}>
                                <div className={styles.textoCimaPrototipoBaixo}></div>
                                <div className={styles.tituloPrototipoBaixo}></div>
                                <div className={styles.conteudoPrototipoBaixo}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PrototipoSite
