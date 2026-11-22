import logo from './logo.svg';
// importando os css e os components
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Importando as páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;