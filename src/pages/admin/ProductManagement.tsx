import React from 'react'
import { Space, Table, Button, Image } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
import { Iproducts } from '../../type/products';

interface DataType {
    key: string | number;
    id: number;
    name: string;
    price: number;
    image: any;
}
interface IProps {
    products: Iproducts[],
    onRemove: (id: number) => void
}

const ProductManagementPage = (props: IProps) => {

    const removeProduct = (id: number) => {
        const stauts = confirm("bạn có muốn xóa")
        if (stauts) {
            props.onRemove(id)
        }
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Desc',
            dataIndex: 'desc',
            key: 'desc',
        }, {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (_, { image }) => (
                <>
                    <Image src={image} />
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.id)}>Remove</Button>
                    <Button type="primary" ><Link to={`/admin/${record.id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.products.map((item: Iproducts) => {
        return {
            key: item.id,
            ...item
        }
    })

    return (
        <div>
            <Button type='primary'><Link to={'/admin/add'}>Add New Product</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default ProductManagementPage