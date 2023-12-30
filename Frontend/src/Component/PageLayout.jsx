import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './header/navbar'
export default function PageLayout() {
    return (
        <>
            <Outlet />
        </>

    )
}