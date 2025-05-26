import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicial from './pages/Inicio';
import PaginaCadastro from './pages/Cadastro';
import PaginaListaUsuarios from './pages/Lista';
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/usuarios" element={<PaginaListaUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;