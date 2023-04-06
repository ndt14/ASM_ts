// import React from 'react'
import { useParams } from 'react-router-dom';
import { Iproducts } from '../type/products';

interface Iprops {
    products: Iproducts[]
}
const ProductDetail = (props: Iprops) => {
    const { id } = useParams()
    console.log(id);
    const currentProduct = props.products.find((item) => item.id = id)
    return (
        <div>
            <h2>{currentProduct?.name}</h2>
            <img src={currentProduct?.image} alt="" />
            <p>{currentProduct?.price}</p>
            <p>{currentProduct?.desc}</p>
        </div>
    )
}

export default ProductDetail
