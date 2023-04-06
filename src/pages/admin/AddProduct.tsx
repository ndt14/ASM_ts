import React from 'react';
import { Button, Checkbox, Form, Input, Upload, message } from 'antd';
import { Iproducts } from '../../type/products';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { useNavigate } from 'react-router-dom';

interface IProps {
    onAdd: (product: Iproducts) => void
}
const propss: UploadProps = {
    name: 'image',
    action: 'image',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.image !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.image === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.image === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const AddProduct = (props: IProps) => {
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        alert("thêm thành công");
        props.onAdd(values);
        navigate('/admin')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Productname"
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Desc"
                name="desc"
                rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: 'Vui lòng nhập gía!' }]}
            >
                <Input />
            </Form.Item>

            <Upload {...propss} name="image">
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddProduct









