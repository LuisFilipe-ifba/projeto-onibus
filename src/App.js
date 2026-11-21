import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>Seja Bem-Vindo</h1>
          <p>Area Principal</p>
        </section>
        <section>
          <p>Onibus disponiveis</p>
          <button id="confirmar" className="btn btn-primary">
            Confirmar presença
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;