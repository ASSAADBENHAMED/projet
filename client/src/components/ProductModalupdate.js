import { Fragment ,useState } from 'react';
import {Button,Modal} from 'react-bootstrap'
import { useForm  } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateProducts as updateProductAction } from '../action/productActions';



function productModalupdate(product) {
  const dispatch = useDispatch();
  const [file , setFile]= useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit ,reset} = useForm({defaultValues:{...product}});
    const  updateProducts= (data) => { 
      dispatch(updateProductAction({...data , file}));
      reset();
    }; 
    return (
      <Fragment>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
         <form onSubmit={handleSubmit(updateProducts)}>
         <label htmlFor='title'>title</label>
         <input id='title' type='text' {...register('title')}  required/><br/>
         <label htmlFor='description'>description</label>
         <input id='description' type='text' {...register('desc')} required/><br/>
         <label htmlFor='price'>price</label>
         <input id='price' type='number' {...register('price')} required/><br/>
         <label htmlFor='quantity'>quantity</label>
         <input id='quantity' type='number' {...register('qty')} required/><br/>
         <label htmlFor='image'>image</label>
         <input 
         id='image'
         type='file'
         accept='image/*'
         onChange={(e)=>setFile(e.target.files[0])} 
         required
          />
        <button>ADD</button>
       
         </form>
        </Modal>
      </Fragment>
    );
  }
  
export default productModalupdate  ;