import React from 'react'
import { Outlet } from 'react-router';
import AuthLayout from "../../layouts/AuthLayout";
const AutOutlet = () => {
    return (
        <AuthLayout>
            <Outlet />
        </AuthLayout>
    )
}

export default AutOutlet