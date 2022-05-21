import {React ,/*useEffect*/}  from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
 import { useDispatch ,/* useSelector*/ } from 'react-redux';
 import { register as registerAction } from '../action/userAction';
const Signup = () => {
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
 
  const dispatch = useDispatch();
  const  registerNewUser = (data) => { 
    dispatch(registerAction(data,nav));
  };
  // const {isAuth} = useSelector(state=>state.user.userInfo);
  //    useEffect(()=> {
  //     if (isAuth) nav ('/login');
  //   }, [isAuth, nav]);
  return (
    <div className="container">
    <form className="form"  onSubmit={handleSubmit( registerNewUser)}>
    <h1>Sign_up</h1> 
    <br/>
    <div className="form-field">
    <label >NOM:</label>
    <input required type='text'  placeholder="Choose a nom"  {...register('NOM')}/>
    <br/>
    </div>
    <div className="form-field">
    <label >PRENOM:</label>
    <input  required type='text'  placeholder="Choose a prenon"  {...register('PRENOM')}/>
    <br/>
    </div>
    <div className="form-field">
    <label >Email:</label>
    <input required type='email'  placeholder="Enter your email"  {...register('Email')}/>
    <br/>
    </div>
    <div className="form-field">
    <label >Password:</label>
    <input required type='password' placeholder="Enter a strong password"  {...register('Password')}/>
    <br/>
     </div>
     <div className="form-field">
    <button className="btn">Sign_up</button>
    </div>
    </form>
    </div>
  )
}

export default Signup;