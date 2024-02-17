import React from "react"
import styles from './Rodape.module.css'

import Logo from '../../../images/Logo.png'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <img className={styles.logo} src={Logo}/>
        </footer>
    )
}

export default Rodape