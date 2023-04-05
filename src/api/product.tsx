import { Iproducts } from "../type/products"
import instance from "./instance"

const getAll = () => {
    return instance.get('/products')
}

const getOneProduct = (id: number) => {
    return instance.get(`/products/${id}`)
}

const addProducts = (product: Iproducts) => {
    return instance.post('/products', product)
}

const delProducts = (id: number) => {
    return instance.delete(`/products/${id}`)
}

const updateProduct = (product: Iproducts) => {
    return instance.put(`/products/${product.id}`, product)
}

export { getAll, getOneProduct, addProducts, updateProduct, delProducts }