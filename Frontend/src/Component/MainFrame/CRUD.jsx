import { useEffect, useState } from "react";
import Drawer from "../Drawer/Drawer";
import Navbar from "../header/navbar";
import Table from "./tableHeading";
import axios from "axios";
import Link from "../link";
import Task from "./task";



export default function CRUD() {
    let id = localStorage?.getItem('User_ID')
    const [data, setData] = useState({})
    const [task, setTask] = useState()
    useEffect(()=>{
        if(id){
            axios.post(`${Link}Search`,{
                "id":id
            }).then((res)=>{
                setData(res.data.message)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }, [])
    useEffect(()=>{
        if(data.email){
            axios.post(`${Link}TaskSearch`,{
                "email": data.email
            }).then((res)=>{
                setTask(res.data.message)
            }).catch((err)=>{
                console.log(err)
            })
        }
    })
    return (
        <>
            <Navbar />
            <Drawer/>
            <Table/>
            {
                task?.map((v,i)=>{
                    return(
                        <Task title={v?.title} desc={v?.description} date={v?.dueDate} status={v?.status} k={i} id={i+1} email={data.email}/>
                    )
                })
            }
        </>
    )
}