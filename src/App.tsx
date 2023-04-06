import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
// import './App.css'
import HomePage from './pages/HomePage';
import { addProducts, delProducts, getAll, updateProduct } from './api/product';
import ProductsPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import { Iproducts } from './type/products';
import ProductManagementPage from './pages/admin/ProductManagement';
import AddProduct from './pages/admin/AddProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import Admin from './pages/layout/Admin';
import Website from './pages/layout/Website';

function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    getAll().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id: number) => {
    delProducts(id).then(() => setProduct(products.filter((item: Iproducts) => item.id !== id)))
  }
  const onHandleUpdate = (product: Iproducts) => {

    updateProduct(product).then(() => getAll().then(({ data }) => setProduct(data)))
  }
  const onHandleAdd = (product: Iproducts) => {
    addProducts(product).then(() =>
      getAll().then(({ data }) => setProduct(data)))

  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Website />}>

          <Route index path='/products' element={<ProductsPage products={products} />} />
          <Route path='/detail/:id' element={<ProductDetail products={products} />} />

        </Route>
        {/* adminn */}
        <Route path='/admin' element={<Admin />}>
          <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
          <Route path='add' element={<AddProduct onAdd={onHandleAdd} />} />
          <Route path=':id/update' element={<UpdateProduct onUpdate={onHandleUpdate} products={products} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
