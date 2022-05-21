import {React } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch ,  useSelector} from 'react-redux';
import { Login as signinAction } from '../action/userAction';
import './login.css'

const Login = () => {
 
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const  loginUser = (data) => { 
    dispatch(signinAction(data,nav));
  }; 
  const nav = useNavigate();
  const { errors} = useSelector(state=>state.user) ;
//   useEffect(()=> {   
//   if(isAuth) nav('/Profil')
//  },[isAuth , nav]);
  return ( 
    <div className="container">
    
    <form className="form" onSubmit={handleSubmit(  loginUser)}>
        <h1>Sign_in</h1>
        <div className="form-field">
             <label >Email:</label>
             <input required type='email'  placeholder="Enter your email"  {...register('Email')}/>
            <br/>
          </div>
          <div className="form-field">
            <label>Password:</label>
            <input required type='password' placeholder="Enter a strong password"  {...register('Password')}/>
            <br/>
          </div>
          <div className="form-field">
            {errors && <p>{errors}</p>}
            <button className="btn">login</button>
         </div>
        </form>
    </div>
  )
}

export default Login;