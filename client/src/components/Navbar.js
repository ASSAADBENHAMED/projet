import React from 'react'
import { Link } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import { logoutAction } from '../action/userAction';
import'./Navbar.css';
import { Fragment } from 'react';
const Navbar = () => {
const dispatch=useDispatch();
const {isAuth , personInfo} = useSelector((state)=>state.user);
const logout= (e) =>{
  e.preventDefault();
  dispatch(logoutAction());
};
  return ( 
   
    <div className="navbar">
       <Link to='/'>Home</Link> 
       {isAuth ?(
          <Fragment>
            <link to='/Profil'>{personInfo.PRENOM}</link>
             <button onClick={logout}>logout</button> 
       
          </Fragment>
          ):(
          <Fragment> 
            <Link to='/Login'> Login </Link>|
            <Link to='/Signup'>Signup</Link> |
            <Link to='/Contact'>Contact</Link>
          </Fragment>
       )
      };
      
    </div>

   
    
 
)};
export default Navbar;