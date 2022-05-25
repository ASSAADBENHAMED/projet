import { Fragment } from 'react';
import {useEffect} from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { deleteProducts, getProducts } from '../action/productActions';
import ProductModal from '../components/ProductModal';
import ProductModelupdate  from '../components/ProductModalupdate';
const AdminDashboard = () => {
 const dispatch = useDispatch();
 const {productList , loading} =useSelector(state=>state.product)
 useEffect(()=>{
   dispatch(getProducts()); 
 }, [dispatch]);
 const handleDeleteProduct = (prodId) => { 
   dispatch(deleteProducts(prodId))
 }
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
      <button onClick={()=>handleDeleteProduct(el._id)}>delete</button>
      <ProductModelupdate  product={el}/>
      </Fragment>
    ))
    
    }
    </div>
  )
}

export default AdminDashboard