import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LogoPage from './components/Logo';
import ThreeScene from './components/ThreeScene';
import AvatarThree from './components/AvatarThree';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Devis from './components/Devis';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Logo" element={<LogoPage />}></Route>
          <Route path="/ThreeScene" element={<ThreeScene />}></Route>
          <Route path="/AvatarThree" element={<AvatarThree />}></Route>
          <Route path="/Competences" element={<Competences />}></Route>
          <Route path="/Projets" element={<Projets />}></Route>
          <Route path="/Devis" element={<Devis />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
