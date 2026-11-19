import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span
                className="d-inline-flex align-items-center justify-content-center bg-white text-dark fw-bold rounded"
                style={{ width: 32, height: 32 }}
              >
                D
              </span>
              <span className="fs-4 fw-bold">Digital Store</span>
            </div>
            <p className="text-secondary small">
              Loja referência em tênis, streetwear e acessórios. Projeto desenvolvido em React + Bootstrap 5.
            </p>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Informação</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 text-secondary">
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Categorias</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><Link to="/products" className="text-secondary text-decoration-none">Camisetas</Link></li>
              <li><Link to="/products" className="text-secondary text-decoration-none">Calças</Link></li>
              <li><Link to="/products" className="text-secondary text-decoration-none">Bonés</Link></li>
              <li><Link to="/products" className="text-secondary text-decoration-none">Headphones</Link></li>
              <li><Link to="/products" className="text-secondary text-decoration-none">Tênis</Link></li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h6 className="fw-bold mb-3">Contato</h6>
            <p className="text-secondary small mb-2">
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
            </p>
            <p className="text-secondary small mb-0">(85) 3051-3411</p>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <p className="text-center text-secondary small mb-0">
          © 2026 Digital College
        </p>
      </div>
    </footer>
  );
}