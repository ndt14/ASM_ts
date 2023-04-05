import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
// import './App.css'
import HomePage from './pages/HomePage';
import { addProducts, delProducts, getAll, updateProduct } from './api/product';
import ProductsPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import { Iproducts } from './type/products';
import ProductManagementPage from './pages/admin/ProductManagement';

function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    getAll().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id: number) => {
    delProducts(id).then(() => setProduct(products.filter((item: Iproducts) => item.id !== id)))
  }
  const onHandleUpdate = (product: Iproducts) => {
    updateProduct(product)
  }
  const onHandleAdd = (product: Iproducts) => {
    addProducts(product)
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='/products' element={<ProductsPage products={products} />} />
          <Route path=':id' element={<ProductDetail products={products} />} />

        </Route>
        <Route path='/admin'>
          <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
