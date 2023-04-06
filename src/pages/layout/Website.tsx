import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserSwitchOutlined, HomeOutlined, InboxOutlined, UserOutlined, SettingOutlined, UserAddOutlined } from '@ant-design/icons';
import { MenuProps, Layout, Button } from 'antd';
const { Header, Footer, Content } = Layout;
import { Menu } from 'antd';
import styles from '../../css/HomPage.css'
import classNames from 'classnames';

const cx = classNames.bind(styles)
const items: MenuProps['items'] = [

    {
        label: (
            <a><Link to={'/products'} />Products</a>

        ),


        key: 'alipay',
    },
    {
        label: (
            <a><Link to={'/admin'} />Admin</a>

        ),


        key: 'alipay',
    },

]

const Website = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <div>
            <div className={cx('header')}>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                <div className={cx('box_btn')}>
                    <Button type="primary">Login</Button>
                    <Button>Log out</Button>
                </div>

            </div>

            <div style={{ padding: 24, minHeight: 560 }}>
                <Outlet />
            </div>
            <Footer style={{ textAlign: 'center' }}>Design ©2023 by NĐT</Footer>

        </div>

    )
}

export default Website
