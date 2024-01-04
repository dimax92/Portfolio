import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import LogoPage from './components/Logo';
import ThreeScene from './components/ThreeScene';
import AvatarThree from './components/AvatarThree';
import CylindreCompetences from './components/Competences';
import Projets from './components/Projets';
import Devis from './pages/Devis';
import Toto from './components/Toto';
import Accueil from './pages/Accueil';
import Navigation from './components/Navigation';
import { DivApp } from './style/style';
import Competences from './pages/Competences';
import Realisations from './pages/Realisations';

function App() {
  return (
    <DivApp className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Logo" element={<LogoPage />}></Route>
          <Route path="/ThreeScene" element={<ThreeScene />}></Route>
          <Route path="/AvatarThree" element={<AvatarThree />}></Route>
          <Route path="/Competence" element={<CylindreCompetences />}></Route>
          <Route path="/Projets" element={<Projets />}></Route>

          <Route path='/Accueil' element={<Accueil />}></Route>
          <Route path='/Competences' element={<Competences />}></Route>
          <Route path='/Realisations' element={<Realisations />}></Route>
          <Route path='/Devis' element={<Devis />}></Route>
        </Routes>
      </Router>
    </DivApp>
  );
}

export default App;
