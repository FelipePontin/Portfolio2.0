import React from "react"
import styles from './Navigation.module.css'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

import Logo from '../../images/Logo.png'

import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";

const Navigation = () => {
    return (
        <header className={styles.cabecalho}>
            <BrowserRouter>
                <img className={styles.logo} src={Logo}></img>
                <nav className={styles.navegacao}>
                    <ul className={styles.itens}><li className={styles.item}><Link className={styles.link} to='#projetos' smooth>Projetos</Link></li></ul>
                    <ul className={styles.itens}><li className={styles.item}><Link className={styles.link} to='#conhecimentos' smooth>Conhecimentos</Link></li></ul>
                    <ul className={styles.itens}><li className={styles.item}><Link className={styles.link} to='#ajuda' smooth>Ajuda</Link></li></ul>
                </nav>
                <div className={styles.divisoes_botoes}>
                    <a href='https://github.com/FelipePontin' target='_blank'>
                        <div className={styles.divisao_botao}>
                            <FaGithub className={styles.icone_botao} />
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/felipepanebiancopontin/' target='_blank'>
                        <div className={styles.divisao_botao}>
                            <FaLinkedin className={styles.icone_botao} />
                        </div>
                    </a>
                </div>
            </BrowserRouter>
            <FaBars className={styles.barrasMenu} />
        </header>
    )
}

export default Navigation
