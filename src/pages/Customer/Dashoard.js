import React from "react";
import DashoardLayout from "../../layouts/DashLayout";

import { Outlet } from "react-router";


const Dashboard = () => {
    return (

        <DashoardLayout> 

           <Outlet/> 
            
        </DashoardLayout>
    );
};

export default Dashboard;
