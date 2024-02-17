import React from "react"
import styles from './Navigation.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Logo from '../../images/Logo.png'

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navigation = () => {
    return (
        <header className={styles.cabecalho}>
            <img className={styles.logo} src={Logo}></img>
            <nav className={styles.navegacao}>
                <ul className={styles.itens}><li className={styles.item}><a className={styles.link} href='#'>Habilidades</a></li></ul>
                <ul className={styles.itens}><li className={styles.item}><a className={styles.link} href='#'>Projetos</a></li></ul>
                <ul className={styles.itens}><li className={styles.item}><a className={styles.link} href='#'>Experiências</a></li></ul>
                <ul className={styles.itens}><li className={styles.item}><a className={styles.link} href='#'>Sobre</a></li></ul>
            </nav>
            <div className={styles.divisoes_botoes}>
                <div className={styles.divisao_botao}>
                    <FaGithub className={styles.icone_botao}/>
                </div>
                <div className={styles.divisao_botao}>
                    <FaLinkedin className={styles.icone_botao}/>
                </div>
            </div>
        </header>
    )
}

export default Navigation
