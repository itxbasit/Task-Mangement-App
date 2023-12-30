import { useEffect, useState } from "react"
import Link from "../link"
import axios from "axios"
import Icon, { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import Drawer from "../Drawer/Drawer";
import TaskDescription from "../Drawer/form";

export default function Task({ id, title, desc, date, status, k, email}) {
    const Delete = () => {
        axios.post(`${Link}Delete`, {
            email,
            id: k
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const Edit = () => {
        setIsDrawerOpen(true);
    }
    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };
    return (
        <div className="m-4" >
            <ul key={k} style={{ color: "black", backgroundColor: "#fff" }}>
                {
                    id ?
                        <li key={1}>{id}</li> :
                        null
                }
                {
                    title ?
                        <li key={2}>{title}</li>
                        : null
                }
                {desc ?
                    <li key={3}>{desc}</li>
                    : null}
                {date ?
                    <li key={4}>{date}</li>
                    : null}
                <li key={5}>{status}</li>
                <li key={6}><button key={k} onClick={Delete}><DeleteTwoTone /></button></li>
                <li key={7}><button onClick={Edit}><EditTwoTone /></button></li>
            </ul>
            {isDrawerOpen && (
                <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} value={"edit"} id={k} title={title} desc={desc} date={date} status={status} email={email}/>
            )}
        </div>
    )
}