import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
    DoubleRightOutlined,
    PieChartOutlined,
    SmileTwoTone,

} from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Content, Footer, Sider } = Layout;


const menuList = [
    {
        "id": 1,
        "name": "Products",
        "icon": <SmileTwoTone />,
        "path": "/admin"
    },
    {
        "id": 2,
        "name": "user",
        "icon": <PieChartOutlined />,
        "path": "/admin/products"
    },
    {
        "id": 3,
        "name": "Sign Out",
        "icon": <DoubleRightOutlined />,
        "path": "/"
    }
]
const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (

        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {
                            menuList.map(item => {
                                return <Menu.Item
                                    key={item.id}
                                    icon={item.icon}
                                >
                                    <Link to={item.path}>{item.name}</Link>
                                </Menu.Item>
                            })
                        }

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Design ©2023 by NĐT</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default Admin
