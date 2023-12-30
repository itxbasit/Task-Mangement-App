import React, { useEffect, useState } from 'react';
import { Button, Select, Form, Input, message, Upload, DatePicker, Space } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import Link from '../link';


const EditTask = ({ id, email, title, desc, status, date }) => {
    const navigate = useNavigate();
    const [data, setData] = useState({})
    //   useEffect(() => {
    //     if (id) {
    //       axios.post('http://localhost:9000/Search', {
    //         "id": id
    //       }).then((res) => {
    //         setData(res.data.message)
    //       }).catch((err) => {
    //         console.log(err)
    //       })
    //     }
    //   }, [])
    const onFinish = (values) => {
        let eDate = values.dueDate ? ((values.dueDate.$d).toString()).substring(0, 15) : date
        const update = {
            email,
            id,
            taskDetails: {
                title: values.title ? values.title : title,
                description: values.description ? values.description : desc,
                status: values.status ? values.status : status,
                dueDate: eDate
            }
        }
        console.log(update)
        form.resetFields();
        axios.post(`${Link}Edit`,
          update
        ).then(function (res) {
          Swal.fire({
            title: "Good job!",
            text: "Task updated successfully",
            icon: "success"
          });
        }).catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.message}`,
            footer: 'Something went wrong!'
          });
        })

    };
    const onFinishFailed = (errorInfo) => {

    };
    const { TextArea } = Input;
    const [form] = Form.useForm();
    return (
        <div style={{ backgroundColor: "", width: "23.1rem", padding: "2rem 0", borderRadius: "12px" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "400", textAlign: "center", color: "#5C92F7" }}>Update Task</h1>
            <Form
                name="basic"
                style={{
                    alignItems: "center",
                    textAlign: "center",
                }}
                className='mt-8'
                initialValues={{
                    remember: true,
                }}
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="title"
                >
                    <Input style={{ width: "20rem" }} value={title} placeholder='Your Task Title' defaultValue={title} type='text' maxLength={40} />
                </Form.Item>
                <Form.Item
                    name="description"
                >
                    <TextArea style={{ width: "20rem", resize: 'none' }} rows={3} placeholder="Short Description" maxLength={120} defaultValue={desc} />
                </Form.Item>

                <Form.Item
                    name="status"
                >
                    <Select
                        showSearch
                        style={{
                            width: '20rem',
                            textAlign: "start"
                        }}
                        defaultValue={status}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={[
                            {
                                value: 'To Do',
                                label: 'To Do',
                            },
                            {
                                value: 'In Progress',
                                label: 'In Progress',
                            },
                            {
                                value: 'Done',
                                label: 'Done',
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="dueDate"
                >
                    <DatePicker style={{ width: "20rem" }} placeholder={date} />
                </Form.Item>
                <Form.Item
                    style={{ position: "absolute", margin: "0.5rem 1.6rem" }}
                >
                    <Button style={{ backgroundColor: "#0b54db", color: "#fff" }} htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};
export default EditTask;