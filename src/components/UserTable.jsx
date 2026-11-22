const usuarios = [
  { id: 1, nome: 'João', senha: '123456', email: 'joao@email.com' },
  { id: 2, nome: 'Marcelo', senha: '123456', email: 'marcelo@email.com' },
  { id: 3, nome: 'Ana', senha: '123456', email: 'ana@email.com' },
  { id: 4, nome: 'pedro', senha: '123456', email: 'pedro@email.com' },
  { id: 5, nome: 'maria', senha: '123456', email: 'maria@email.com' },
];

function UserTable() {
  return (
    <section>
      <h2>Tabela de Usuários</h2>
      <div id="azul">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Senha</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.nome}</td>
                <td>{u.senha}</td>
                <td>{u.email}</td>
                <td>
                  <button>Editar</button> <button>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default UserTable;