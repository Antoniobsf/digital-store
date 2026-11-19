import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ProductListing from '../components/ProductListing';

export default function ProductViewPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [addedMessage, setAddedMessage] = useState(false);
  const timeoutRef = useRef(null);

  // Reseta seleções, limpa timer pendente e rola para o topo quando mudar de produto
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[0] ?? '');
      setSelectedColor(product.colors?.[0] ?? '');
      setAddedMessage(false);
    }
    window.scrollTo(0, 0);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [id, product]);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h3 className="fw-bold mb-3">Produto não encontrado</h3>
        <Link to="/products" className="btn btn-ds-primary px-4">
          Voltar para Produtos
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  function handleBuy() {
    setAddedMessage(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setAddedMessage(false), 3000);
  }

  return (
    <div className="container py-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb small">
          <li className="breadcrumb-item">
            <Link to="/" className="text-secondary text-decoration-none">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/products" className="text-secondary text-decoration-none">
              Produtos
            </Link>
          </li>
          <li className="breadcrumb-item text-secondary">{product.category}</li>
          <li className="breadcrumb-item active text-dark fw-semibold" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Detalhes do Produto */}
      <div className="row g-5 mb-5">
        {/* Galeria / Imagem Principal */}
        <div className="col-12 col-lg-7">
          <div
            className="bg-white rounded-3 shadow-sm d-flex align-items-center justify-content-center p-4"
            style={{ minHeight: 420 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
              style={{ maxHeight: 380, objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Informações e Opções de Compra */}
        <div className="col-12 col-lg-5">
          <h2 className="fw-bold text-dark mb-1">{product.name}</h2>
          <p className="text-secondary small mb-3">
            {product.category} | {product.brand} | REF: {product.reference}
          </p>

          {/* Avaliação */}
          <div className="d-flex align-items-center gap-2 mb-3">
            <span
              className="badge d-inline-flex align-items-center gap-1 px-2 py-1 text-white"
              style={{ backgroundColor: '#F6AA1C' }}
            >
              {product.rating} <Star size={14} fill="white" />
            </span>
            <span className="text-secondary small">
              ({product.reviews} avaliações)
            </span>
          </div>

          {/* Preço */}
          <div className="d-flex align-items-baseline gap-2 mb-4">
            <span className="fs-3 fw-bold text-dark">
              R$ {(product.priceDiscount ?? product.price).toFixed(2).replace('.', ',')}
            </span>
            {product.priceDiscount != null && (
              <span className="text-secondary text-decoration-line-through">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>

          {/* Descrição */}
          <div className="mb-4">
            <p className="fw-bold small text-secondary mb-1">Descrição do produto</p>
            <p className="text-dark small mb-0">{product.description}</p>
          </div>

          {/* Seleção de Tamanho */}
          {product.sizes?.length > 0 && (
            <div className="mb-4">
              <p className="fw-bold small text-secondary mb-2">Tamanho</p>
              <div className="d-flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`btn btn-sm fw-bold ${
                      selectedSize === size
                        ? 'btn-ds-primary'
                        : 'btn-outline-secondary bg-white text-dark'
                    }`}
                    style={{ minWidth: 44, height: 44 }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Seleção de Cor */}
          {product.colors?.length > 0 && (
            <div className="mb-4">
              <p className="fw-bold small text-secondary mb-2">Cor</p>
              <div className="d-flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Cor ${color}`}
                    className="rounded-circle p-0"
                    style={{
                      width: 32,
                      height: 32,
                      backgroundColor: color,
                      border:
                        selectedColor === color
                          ? '3px solid #C92071'
                          : '1px solid #ccc',
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Botão Comprar */}
          <button
            type="button"
            onClick={handleBuy}
            className="btn fw-bold text-white px-5 py-2 w-100"
            style={{ backgroundColor: '#F6AA1C', borderRadius: 8 }}
          >
            COMPRAR
          </button>

          {addedMessage && (
            <div className="alert alert-success mt-3 py-2 small" role="alert">
              Produto adicionado ao carrinho! (Tamanho: <strong>{selectedSize}</strong>)
            </div>
          )}
        </div>
      </div>

      {/* Produtos Relacionados */}
      <section className="pt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold mb-0">Produtos relacionados</h4>
          <Link
            to="/products"
            className="text-ds-primary text-decoration-none fw-semibold d-flex align-items-center gap-1"
          >
            Ver todos <ArrowRight size={18} />
          </Link>
        </div>
        <ProductListing products={relatedProducts} />
      </section>
    </div>
  );
}
