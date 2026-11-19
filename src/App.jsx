import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

function PlaceholderPage({ title }) {
  return (
    <div className="container py-5">
      <h1 className="fw-bold">{title}</h1>
      <p className="text-secondary">Em construção...</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<PlaceholderPage title="Listagem de Produtos"/>} />
          <Route path="/product/:id" element={<PlaceholderPage title="Visualização do Produto"/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}