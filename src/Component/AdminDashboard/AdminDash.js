import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import AdminNav from '../AdminNav/AdminNav';

const AdminDash = () => {
    return (
      <>
      <Header></Header>
      <AdminNav></AdminNav>
    <div className="drawer lg:drawer-open">
      <input id="dropdown-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <Outlet></Outlet>
      </div>

      <div className="drawer-side">
        <label htmlFor="dropdown-drawer" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 h-full bg-base-200  ">
          <li><Link to = '/dashboard/add-products'>Add Product</Link></li>
          <li><Link to = '/dashboard/manage-products'>Manage Products</Link></li>
          <li><Link to = '/dashboard/product-report'>Show Report</Link></li>
        </ul>
      </div>

    </div>
      </>
      

    );
};

export default AdminDash;