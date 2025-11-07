import React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router"


const UserDashboard=()=>{
    return(
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <Outlet></Outlet>
       
    </div>)
}
export default UserDashboard