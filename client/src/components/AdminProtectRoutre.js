import React from 'react';
import { useSelector } from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';
const AdminProdectRouter = () => {

    const { isAuth , personInfo} =useSelector((state)=>state.user);
    return (
   
    <div> { isAuth && personInfo.role === 'admin' ? <Outlet/> : <Navigate to='/login'/> } </div>
  )
}

export default AdminProdectRouter;