import { GET_PRODUCET_FAILED, GET_PRODUCET_LOADING, GET_PRODUCET_SUCCESS } from "../action/productTypes";

const initState = {
    productsList:[],
    loading:false,
    errors:null
}

const productReducer = (state = initState ,{type, payload}) =>{
    switch (type) {
      case GET_PRODUCET_LOADING: 
      return {...state,loading:true}
      case GET_PRODUCET_SUCCESS: 
      return {...state, productsList:payload ,loading:false, errors:false}
      case GET_PRODUCET_FAILED:
        return {...state ,loading:false, errors:payload}  
    default:
            return state
}
};
export default productReducer; 