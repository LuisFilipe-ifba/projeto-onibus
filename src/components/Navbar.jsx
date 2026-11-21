function Navbar() {
  return (
    <nav id="menu">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-2">
            <a href="/">Home</a>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <a href="/login">Login</a>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <a href="/usuarios">Usuarios</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;