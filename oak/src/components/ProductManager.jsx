import { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import { Routes, Route } from 'react-router-dom';

const ProductManager = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <Routes>
        <Route path="/product-form" element={<ProductForm onAddProduct={addProduct} />} />
        <Route path="/product-list" element={<ProductList products={products} />} />
      </Routes>
    </div>
  );
};

export default ProductManager;
