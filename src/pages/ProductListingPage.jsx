import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductListing from '../components/ProductListing';

const CATEGORIES = [...new Set(products.map((p) => p.category))];
const BRANDS = [...new Set(products.map((p) => p.brand))];

export default function ProductListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilter = (searchParams.get('filter') || '').trim();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortBy, setSortBy] = useState('relevantes');

  function toggleItem(value, list, setList) {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  }

  function clearFilters() {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSortBy('relevantes');
    if (searchFilter) {
      setSearchParams({});
    }
  }

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchFilter) {
      const term = searchFilter.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.brand.toLowerCase().includes(term)
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    if (sortBy === 'menor-preco') {
      result.sort((a, b) => (a.priceDiscount ?? a.price) - (b.priceDiscount ?? b.price));
    } else if (sortBy === 'maior-preco') {
      result.sort((a, b) => (b.priceDiscount ?? b.price) - (a.priceDiscount ?? a.price));
    }

    return result;
  }, [searchFilter, selectedCategories, selectedBrands, sortBy]);

  return (
    <div className="container py-4">
      {/* Cabeçalho da listagem + Ordenação */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h5 className="mb-0 fw-bold text-dark">
            {searchFilter ? (
              <>
                Resultados para "{searchFilter}"{' '}
                <span className="fw-normal text-secondary">
                  - {filteredProducts.length} produto(s)
                </span>
              </>
            ) : (
              <>
                Todos os produtos{' '}
                <span className="fw-normal text-secondary">
                  - {filteredProducts.length} produto(s)
                </span>
              </>
            )}
          </h5>
        </div>

        <div className="d-flex align-items-center gap-2">
          <label htmlFor="sortSelect" className="fw-bold small text-nowrap mb-0">
            Ordenar por:
          </label>
          <select
            id="sortSelect"
            className="form-select form-select-sm"
            style={{ width: 200 }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="relevantes">Mais relevantes</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {/* Sidebar de Filtros */}
        <aside className="col-12 col-lg-3">
          <div className="bg-white p-4 rounded-3 shadow-sm">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
              <h6 className="fw-bold mb-0">Filtrar por</h6>
              {(selectedCategories.length > 0 || selectedBrands.length > 0 || searchFilter) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn btn-link btn-sm p-0 text-ds-primary text-decoration-none"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Filtro de Marca */}
            <div className="mb-4">
              <p className="fw-bold small mb-2">Marca</p>
              {BRANDS.map((brand) => (
                <div className="form-check mb-1" key={brand}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleItem(brand, selectedBrands, setSelectedBrands)}
                  />
                  <label className="form-check-label small" htmlFor={`brand-${brand}`}>
                    {brand}
                  </label>
                </div>
              ))}
            </div>

            {/* Filtro de Categoria */}
            <div>
              <p className="fw-bold small mb-2">Categoria</p>
              {CATEGORIES.map((category) => (
                <div className="form-check mb-1" key={category}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`cat-${category}`}
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleItem(category, selectedCategories, setSelectedCategories)}
                  />
                  <label className="form-check-label small" htmlFor={`cat-${category}`}>
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Grade de Produtos */}
        <section className="col-12 col-lg-9">
          {filteredProducts.length > 0 ? (
            <ProductListing products={filteredProducts} />
          ) : (
            <div className="bg-white p-5 rounded-3 shadow-sm text-center">
              <h5 className="fw-bold mb-2">Nenhum produto encontrado</h5>
              <p className="text-secondary small mb-3">
                Tente remover alguns filtros ou buscar por outro termo.
              </p>
              <button type="button" onClick={clearFilters} className="btn btn-ds-primary px-4">
                Ver todos os produtos
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
