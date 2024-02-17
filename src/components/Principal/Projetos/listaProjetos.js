import { FaReact, FaJsSquare } from "react-icons/fa";
import styles from './Projetos.module.css'

export const listaProjetos = [
    {
        nome: 'POKEDEX', 
        subtitulo: 'Consumindo a API do Pokemon', 
        icone: 'https://i.ibb.co/jbQdDPh/Icone-Pokedex.png', 
        cor: '#bc343457', 
        linguagem: 'REACT', 
        corLinguagem: 'REACT', 
        iconeLinguagem: <FaReact style={{color: '#61DBFB'}} className={styles.iconeLinguagemProjeto}/>, 
        demo: 'https://projeto-pokedex-reactjs.vercel.app', 
        repositorio: 'https://github.com/FelipePontin/pokedex'
    },
    {
        nome: 'SORTE NORTE', 
        subtitulo: 'Plataforma de sorteios em tempo real', 
        icone: 'https://i.ibb.co/TcH2GRQ/Icone-Sorte-Norte-Png.png', 
        cor: '#0052cc57', 
        linguagem: 'REACT', 
        iconeLinguagem: <FaReact style={{color: '#61DBFB'}} className={styles.iconeLinguagemProjeto}/>, 
        demo: 'https://sorte-norte.vercel.app', 
        repositorio: '#',
    },
    {
        nome: 'TERMO', 
        subtitulo: 'Descubra a palavra certa em 6 tentativas', 
        icone: 'https://i.ibb.co/jkHSQtf/Icone-Termo-Png.png', 
        cor: '#6e5c6257', 
        linguagem: 'REACT', 
        corLinguagem: '', 
        iconeLinguagem: <FaReact style={{color: '#61DBFB'}} className={styles.iconeLinguagemProjeto}/>, 
        demo: 'https://jogo-termo.vercel.app', 
        repositorio: 'https://github.com/FelipePontin/termo'
    },
    {
        nome: 'PORTFOLIO', 
        subtitulo: 'Portfolio criado para apresentar projetos', 
        icone: 'https://i.ibb.co/024qFx5/Icone-Portfolio-Png.png', 
        cor: '#2CB67D57', 
        linguagem: 'REACT', 
        corLinguagem: '', 
        iconeLinguagem: <FaReact style={{color: '#61DBFB'}} className={styles.iconeLinguagemProjeto}/>, 
        demo: 'https://portfolio-felipepontin.vercel.app', 
        repositorio: 'https://github.com/FelipePontin/Portfolio2.0'
    },
    {
        nome: 'IDLE GAME', 
        subtitulo: 'Clique na moeda para ganhar mais moedas', 
        icone: 'https://i.ibb.co/txRYCyz/Icone-Idle-Game-Png.png', 
        cor: '#ffff0057', 
        linguagem: 'JAVASCRIPT', 
        corLinguagem: '', 
        iconeLinguagem: <FaJsSquare style={{color: '#F3E31B'}} className={styles.iconeLinguagemProjeto}/>,  
        demo: 'https://felipepontin.github.io/Idle-Game/', 
        repositorio: 'https://github.com/FelipePontin/Idle-Game'
    },
    {
        nome: 'TO DO LIST', 
        subtitulo: 'Gerencie as suas tarefas do dia a dia', 
        icone: 'https://i.ibb.co/HBcYf5s/Icone-To-Do-List-Png.png', 
        cor: '#53c6ea57', 
        linguagem: 'JAVASCRIPT', 
        corLinguagem: '', 
        iconeLinguagem: <FaJsSquare style={{color: '#F3E31B'}} className={styles.iconeLinguagemProjeto}/>,  
        demo: 'https://felipepontin.github.io/To-Do-List/', 
        repositorio: 'https://github.com/FelipePontin/To-Do-List'
    },
]