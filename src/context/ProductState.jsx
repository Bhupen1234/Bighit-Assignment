import React, { useEffect, useState } from 'react'
import ProductContext from './productContext'
import axios from 'axios';
import { useSnackbar } from 'notistack';

const ProductState = ({children}) => {
    const getLocalStorageCartData=()=>{
        const localStorageCartData=localStorage.getItem("cartItems");
        return localStorageCartData ? JSON.parse(localStorageCartData) : [];
    }
  const [productsData ,setProductsData] = useState([]);
  const {enqueueSnackbar} = useSnackbar()

  const [cartData,setCartData] = useState(getLocalStorageCartData());

  const fetchProducts =async()=>{
    const response = await axios.get("https://dummyjson.com/products?limit=25");
    

    setProductsData(response.data.products);
  }


  useEffect(()=>{
  fetchProducts();
  },[])


  


  const addProductToCart = (productDetails)=>{
           const product = {
            title : productDetails.title,
            image : productDetails.thumbnail,
            price : productDetails.price,
            id : productDetails.id,
            quantity : 1,
           }


           let localStoragedata= JSON.parse(localStorage.getItem("cartItems"))

           
             let isProductAlreadyInCart=localStoragedata.find(item=>item.id===product.id)
             
            if(isProductAlreadyInCart){
                enqueueSnackbar("Product already in cart",{variant:"error"})
                return
            }
           
          

           setCartData((prevCartData)=>{
            return [...prevCartData,product];
           })
           enqueueSnackbar("Product Added to Cart",{variant:"success"})
  }


 
    useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(cartData));
    },[cartData])







 
  return (
    <ProductContext.Provider value={{productsData,addProductToCart,cartData,setProductsData,setCartData}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductState
