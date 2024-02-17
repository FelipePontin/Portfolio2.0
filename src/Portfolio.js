import './Portfolio.css';
import Navigation from './components/Navigation/Navigation';
import Apresentacao from './components/Principal/Apresentacao/Apresentacao';
import CriandoExperiencia from './components/Principal/CriandoExperiencia/CriandoExperiencia'
import TragaSeuProjeto from './components/Principal/TragaSeuProjeto/TragaSeuProjeto'
import PrototipoSite from './components/Principal/PrototipoSite/PrototipoSite';
import Detalhe from './components/Principal/Detalhe/Detalhe';
import Ajuda from './components/Principal/Ajuda/Ajuda';
import Criar from './components/Principal/Criar/Criar';
import Rodape from './components/Principal/Rodape/Rodape';

function Portfolio() {
  return (
    <div className="App">
      <Navigation/>
      <Apresentacao/>
      <CriandoExperiencia/>
      <TragaSeuProjeto/>
      <PrototipoSite/>
      <Detalhe/>
      <Ajuda/>
      <Criar/>
      <Rodape/>
    </div>
  );
}

export default Portfolio;