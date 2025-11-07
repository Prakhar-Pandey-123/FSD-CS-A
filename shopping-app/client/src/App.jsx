import React from "react";
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserDashboard from "./pages/UserDashboard";
import Cart from "./components/Cart"
import ViewOrders from "./components/ViewOrders";
import Logout from "./components/Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<UserDashboard></UserDashboard>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="orders" element={<ViewOrders></ViewOrders>}></Route>
          <Route path="logout" element={<Logout></Logout>}></Route>

        </Route >

      </Routes>

    </BrowserRouter>

  )

}
export default App