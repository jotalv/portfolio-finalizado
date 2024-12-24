function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/"><img className="navbar-logo img" src="./lv.png"/></a>
        </div>
        <div className="navbar-center">
          <ul className="navbar-links">
            <li className="itens"><a href="/saiba-mais">Mais</a></li>
            <li className="itens"><a href="/projetos">Projetos</a></li>
            <li className="itens"><a href="/contato">Contato</a></li>
          </ul>
        </div>
      </nav>
    );
  }

  export default Navbar;