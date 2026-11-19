import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ProductListing from '../components/ProductListing';

export default function HomePage() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      {/* Hero Banner */}
      <section className="py-5" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <p className="fw-bold mb-2" style={{ color: '#F6AA1C' }}>
                Melhores ofertas personalizadas
              </p>
              <h1 className="display-4 fw-bold text-dark mb-3">
                Queima de estoque Nike 🔥
              </h1>
              <p className="text-secondary mb-4">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <Link className="btn btn-ds-primary px-5 py-2" to="/products">
                Ver Ofertas
              </Link>
            </div>

            <div className="col-12 col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
                alt="Tênis em destaque"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: 360, objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coleções em Destaque */}
      <section className="container py-5">
        <h4 className="fw-bold mb-4">Coleções em destaque</h4>
        <div className="row g-3">
          {[
            { title: 'Novo drop Supreme', badge: '30% OFF' },
            { title: 'Coleção Adidas', badge: '30% OFF' },
            { title: 'Novo Beats Bass', badge: '30% OFF' },
          ].map((col, index) => (
            <div key={index} className="col-12 col-md-4">
              <div
                className="p-4 rounded-3 h-100 d-flex flex-column justify-content-between"
                style={{ backgroundColor: '#D8E3F2', minHeight: 200 }}
              >
                <div>
                  <span
                    className="badge rounded-pill text-dark fw-bold px-3 py-2 mb-3"
                    style={{ backgroundColor: '#E7FF86' }}
                  >
                    {col.badge}
                  </span>
                  <h4 className="fw-bold">{col.title}</h4>
                </div>
                <div>
                  <Link className="btn bg-white text-ds-primary fw-bold px-4 mt-3" to="/products">
                    Comprar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Produtos em Alta */}
      <section className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold mb-0">Produtos em alta</h4>
          <Link className="text-ds-primary text-decoration-none fw-semibold d-flex align-items-center gap-1" to="/products">
            Ver todos <ArrowRight size={18} />
          </Link>
        </div>
        <ProductListing products={featuredProducts} />
      </section>

      {/* Oferta Especial */}
      <section className="bg-white py-5 mt-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-5 text-center">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=700&q=80"
                alt="Air Jordan edição de colecionador"
                className="img-fluid rounded-4"
                style={{ maxHeight: 300, objectFit: 'cover' }}
              />
            </div>
            <div className="col-12 col-lg-7">
              <p className="text-ds-primary fw-bold mb-2">Oferta especial</p>
              <h2 className="fw-bold mb-3">
                Air Jordan edição de colecionador
              </h2>
              <p className="text-secondary mb-4">
                Design icônico com acabamento premium, amortecimento de alta
                performance e edição limitada para quem busca estilo dentro e
                fora das quadras.
              </p>
              <Link className="btn btn-ds-primary px-5 py-2" to="/product/2">
                Ver Oferta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}