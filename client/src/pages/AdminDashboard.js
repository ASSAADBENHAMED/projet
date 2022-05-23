import { Fragment } from 'react';
import {useEffect} from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { getProducts } from '../action/productActions';


const AdminDashboard = () => {
 const dispatch = useDispatch();
 const {productList , loading} =useSelector(state=>state.product)
 useEffect(()=>{
   dispatch(getProducts()); 
 }, [dispatch]);
  return (
    <div>
    <ProductModal />
    {loading && <p>loading...</p>}
    {productList.map(el=>(
      <Fragment>
      <h4>{el.title}</h4>
      <h6>{el.desc}</h6>
      <img src={el.image} alt="img product" />
      <h6>{el.price}</h6>
      </Fragment>
    ))
    
    }
    </div>
  )
}

export default AdminDashboard