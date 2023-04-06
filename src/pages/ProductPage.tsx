import React, { useEffect, useState } from 'react'

import { Link, Outlet } from 'react-router-dom'
import { Iproducts } from '../type/products'
import { Button } from 'antd'
import classNames from 'classnames'
import styles from '../css/ProductPage.css'

interface Iprops {
    products: Iproducts[]
}
const menuList = [
    {
        "id": 1,
        "name": "Products",
        "path": "/detail"
    }];
const cx = classNames.bind(styles)
const ProductsPage = (props: Iprops) => {
    const [data, setData] = useState<Iproducts[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])

    return (
        <div className={cx('product_warp')}>
            {
                data.map((item) => {
                    return (
                        <div key={item.id} className={cx('box_products')}>
                            <h2>{item.name}</h2>
                            <img src={item.image} alt="" />
                            <p>{item.price}$</p>
                            <p>{item.desc}</p>
                            <td> <Button type="primary"><Link to={'/detail/' + item.id}>Detail</Link></Button></td>
                        </div>
                    )
                })
            }
            {/* <Outlet /> */}
        </div>
    )
}

export default ProductsPage
