import React, { useEffect, useState } from 'react';

import { Breadcrumb, Layout, Menu, theme, Image, Button } from 'antd';
import classNames from 'classnames';
import styles from '../css/HomPage.css'
import { Link } from 'react-router-dom'
import ProductsPage from './ProductPage';
import { getAll } from '../api/product';


const { Header, Content, Footer } = Layout;
const cx = classNames.bind(styles)

const HomePage = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [products, setProduct] = useState([])
    useEffect(() => {
        getAll().then(({ data }) => setProduct(data))
    }, [])
    return (
        <Layout className={cx('container')}>
            <Header className={cx('header')}
                style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                <div
                    style={{
                        float: 'left',
                        width: 120,
                        height: 31,
                        margin: '16px 24px 16px 0',

                    }}
                >
                    <Image style={{
                        float: 'left',
                        width: 120,
                        height: 35,

                    }}
                        src='https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </div>

                <div className={cx('menu_home')}>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/products'}>Products</Link></li>
                        <li><Link to={'/admin'}>Admin</Link></li>
                    </ul>
                </div>

                <div className={cx('login_logout')}>
                    <Button type="primary">Login</Button>
                    <Button>Log out</Button>

                </div>
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 600, background: colorBgContainer }}>
                    <ProductsPage products={products} />
                </div>
            </Content>

            {/* <Footer style={{ textAlign: 'center', marginTop: '40' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
        </Layout>
    )
}

export default HomePage


