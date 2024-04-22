import React, { createContext, useContext } from 'react'
import ProductContext from '../../context/productContext'
import { Divider } from 'primereact/divider';

import styles from "./CartPage.module.css"
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
  const {cartData,setCartData} = useContext(ProductContext)
  const navigate = useNavigate();



  const getTotalAmount=()=>{
    let sum=0;
    cartData.forEach((cartItem)=>{
      sum+=(cartItem.quantity*cartItem.price)
    })

    return sum;
  }

  const increaseQuantity =(itemId)=>{
    setCartData((prevData)=>{
        return (
            prevData.map((data)=>{
                return(
                    data.id===itemId?{...data,quantity:data.quantity+1}:{...data}
                )
            })
        )
    })
  }


  const decreaseQuantity =(itemId)=>{

    
    // setCartData((prevData)=>{
    //     return (
    //         prevData.map((data)=>{
    //             return(
    //                 data.id===itemId?(data.quantity===1 ? () ):
    //             )
    //         })
    //     )
    // })

    setCartData((prevData)=>{
        return prevData.map((data)=>{
            if(data.id===itemId){
                const newQuantity = data.quantity-1;

                if(newQuantity<=0){
                    return null
                }
                else{
                    return{...data,quantity:newQuantity}
                }

            }
            else{
                return {...data}
            }
        }).filter(Boolean)
    })
  }
  return (
    <div className={styles.wrapper}>
         <div className={styles.backArrow} onClick={()=>navigate('/')} >
                   <h4 className='bold'>{"<"}</h4>
        </div>

        <h3>Shopping Cart ({cartData.length})</h3>
         
         {
            cartData.length > 0 && (
                
                     
                        cartData.map((cartItem)=>{
                            return(
                                <>
                               
                              <div className={styles.cartItemWrapper}>
                                {/* <div className={styles.image}>
                                    
                                    <img src={cartItem.image} alt="CardImage" />
                                </div> */}

                                <div className={styles.titlePrice}>
                                       <p className='body1'>{cartItem.title}</p>
                                       <p>${cartItem.price}</p>

                                </div>

                                <div className={styles.incrementDecrement}>
                                     <div style={{width:"50px",height:"50px",backgroundColor:"rgba(231, 236, 240, 1)",borderRadius:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}} onClick={()=>increaseQuantity(cartItem.id)}>
                                        <h4 className="bold">+</h4>
                                     </div>

                                   
                                      {cartItem.quantity}
                                     <div style={{width:"50px",height:"50px",backgroundColor:"rgba(231, 236, 240, 1)",borderRadius:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}} onClick={()=>decreaseQuantity(cartItem.id)}>
                                          <h4 className="bold">-</h4>
                                     </div>
                                </div>
                              </div>

                              <Divider type="solid" style={{marginTop:"3px"}}/>

                              </>
                            )
                        })
                     
               
            )
         }

  {
    cartData.length>0 && (
        <div className={styles.checkOutDetails}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
         <p>SubTotal</p>
         <p className='body1'>${getTotalAmount()}</p>
        </div>
 
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
         <p>Delivery</p>
         <p className='body1'>${2}</p>
        </div>
 
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
         <p>Total</p>
         <p className='body1'>${getTotalAmount() + 2}</p>
        </div>

        <div className={styles.checkOutBtn}>
          <button>Proceed to Checkout</button>
        </div>
     </div>
    )
  }
    
    
    </div>
  )
}

export default CartPage
