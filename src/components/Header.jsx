import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?filter=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/products');
    }
  }

  return (
    <header className="bg-white shadow-sm sticky-top">
      <div className="container py-3">
        <div className="row align-items-center g-3">
          {/* Logo */}
          <div className="col-6 col-lg-3">
            <Link to="/" className="text-decoration-none d-flex align-items-center gap-2">
              <span
                className="d-inline-flex align-items-center justify-content-center bg-ds-primary text-white fw-bold rounded"
                style={{ width: 32, height: 32 }}
              >
                D
              </span>
              <span className="fs-4 fw-bold text-ds-primary">Digital Store</span>
            </Link>
          </div>

          {/* Barra de Busca */}
          <div className="col-12 col-lg-5 order-3 order-lg-2">
            <form onSubmit={handleSearch} className="position-relative">
              <input
                type="text"
                className="form-control bg-light border-0 py-2 pe-5"
                placeholder="Pesquisar produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="btn position-absolute top-50 end-0 translate-middle-y text-secondary border-0"
                aria-label="Pesquisar"
              >
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Ações (Cadastre-se, Entrar, Carrinho) */}
          <div className="col-6 col-lg-4 order-2 order-lg-3 d-flex align-items-center justify-content-end gap-3">
            <a href="#cadastro" className="text-secondary text-decoration-underline d-none d-md-inline small">
              Cadastre-se
            </a>
            <button className="btn btn-ds-primary px-4 py-2 btn-sm">Entrar</button>
            <button className="btn position-relative border-0 p-1 text-ds-primary" aria-label="Carrinho">
              <ShoppingCart size={24} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-ds-primary">
                2
              </span>
            </button>
          </div>
        </div>

        {/* Menu de Navegação */}
        <nav className="d-flex gap-4 mt-3 pt-1 overflow-auto">
          <NavLink to="/" end className={({ isActive }) => `nav-link-ds ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-link-ds ${isActive ? 'active' : ''}`}>
            Produtos
          </NavLink>
          <a href="#categorias" className="nav-link-ds">
            Categorias
          </a>
          <a href="#pedidos" className="nav-link-ds">
            Meus Pedidos
          </a>
        </nav>
      </div>
    </header>
  );
}