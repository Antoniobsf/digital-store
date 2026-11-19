import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="text-decoration-none text-dark d-block h-100">
      <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden">
        <div
          className="position-relative bg-white p-3 d-flex align-items-center justify-content-center"
          style={{ height: 220 }}
        >
          {product.discountBadge && (
            <span
              className="badge rounded-pill position-absolute top-0 start-0 m-3 px-3 py-2 fw-bold text-dark"
              style={{ backgroundColor: '#E7FF86', fontSize: '0.75rem' }}
            >
              {product.discountBadge}
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
            style={{ maxHeight: 170, objectFit: 'contain' }}
          />
        </div>

        <div className="card-body bg-light bg-opacity-25 pt-2">
          <small className="text-secondary fw-semibold">{product.category}</small>
          <h6 className="card-title fw-normal text-dark mt-1 mb-2 text-truncate">
            {product.name}
          </h6>
          <div className="d-flex align-items-center gap-2">
            <span className="text-secondary text-decoration-line-through small">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            <span className="fw-bold text-dark">
              R$ {product.priceDiscount.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}