import { useState } from 'react';

function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // evita recarregar a página
    console.log({ usuario, senha, email });
    // aqui depois você chama sua API (fetch/axios)
  }

  function handleReset() {
    setUsuario('');
    setSenha('');
    setEmail('');
  }

  return (
    <section id="login">
      <h2>Login</h2>
      <div id="formulario" className="form-group">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <h3>Digite suas credenciais</h3>

          <label htmlFor="usuario" className="form-label">Usuário:</label>
          <input
            type="text"
            id="usuario"
            className="form-control"
            name="usuario"
            placeholder="Digite seu usuário"
            pattern="[A-Za-z0-9]{3,15}"
            title="Digite seu usuário (apenas letras e números, de 3 a 15 caracteres)."
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />

          <label htmlFor="senha" className="form-label">Senha:</label>
          <input
            type="password"
            id="senha"
            className="form-control"
            name="senha"
            placeholder="Digite sua senha"
            pattern="[A-Za-z0-9]{6,15}"
            title="Digite sua senha (apenas letras e números, de 6 a 15 caracteres)."
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input type="submit" value="Enviar" className="btn btn-primary" />
          <input type="reset" value="Limpar" className="btn btn-secondary" />
        </form>
      </div>
    </section>
  );
}

export default LoginForm;