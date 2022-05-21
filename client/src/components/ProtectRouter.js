import React from 'react';
import { useSelector } from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';
const ProtectRouter = () => {

    const { isAuth } =useSelector((state)=>state.user);
    return (
   
    <div> { isAuth ? <Outlet/> : <Navigate to='/login'/> } </div>
  )
}

export default ProtectRouter;