import styles from './Conhecimentos.module.css'

import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaPython, FaFigma, FaGitAlt, FaGithub, FaBitbucket, FaMagic, FaCodeBranch } from "react-icons/fa";

export const listaConhecimentos = [
    {
        nome: 'HTML',
        icone: <FaHtml5 style={{color: '#E44B22'}} className={styles.iconeConhecimento}/>,
    },
    {
        nome: 'CSS',
        icone: <FaCss3Alt style={{color: '#2552E8'}} className={styles.iconeConhecimento}/>,
    },
    {
        nome: 'SCSS',
        icone: <FaSass style={{color: '#CC649B'}} className={styles.iconeConhecimento}/>,
    },
    {
        nome: 'JAVASCRIPT',
        icone: <FaJsSquare style={{color: '#F3E31B'}} className={styles.iconeConhecimento}/>,
    },
    {
        nome: 'REACT',
        icone: <FaReact style={{color: '#61DBFB'}} className={styles.iconeConhecimento}/>,
    },
    {
        nome: 'PYTHON',
        icone: <FaPython style={{color: '#3474A6'}} className={styles.iconeConhecimento}/>,
    },
    {
        nome: 'FIGMA',
        icone: <FaFigma style={{color: '#A259FF'}} className={styles.iconeConhecimento}/>,
    },
    {
        nome: 'GIT',
        icone: <FaGitAlt style={{color: '#F05033'}} className={styles.iconeConhecimento}/>,
    },
    {
        nome: 'GITHUB',
        icone: <FaGithub style={{color: '#FFFFFE'}} className={styles.iconeConhecimento}/>,
    },
    {
        nome: 'BITBUCKET',
        icone: <FaBitbucket style={{color: '#2684FF'}} className={styles.iconeConhecimento}/>,
    },
    {
        nome: 'UI/UX',
        icone: <FaMagic style={{color: '#D686FF'}} className={styles.iconeConhecimento}/>,
    },
    {
        nome: 'API RESTFUL',
        icone: <FaCodeBranch style={{color: '#7259C1'}} className={styles.iconeConhecimento}/>,
    },
]
