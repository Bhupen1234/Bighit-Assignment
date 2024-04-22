import React, { useContext } from 'react'
import styles from "./ProductCard.module.css"

import plusSign from "../../images/plus-sign.png"
// import {ReactComponent as EmptyHeart} from "../../images/Empty_heart.svg";
// import {ReactComponent as RedHeart} from "../../images/Red_heart.svg"
import { useNavigate } from 'react-router-dom';
import ProductContext from '../../context/productContext';
const ProductCard = ({product}) => {

    const navigate = useNavigate();
    const {addProductToCart} = useContext(ProductContext)
  return (
    <div className={styles.wrapper} >
       
       <div className={styles.image} onClick={()=>navigate(`/productDetails/${product.id}`)}>
        <img src={product.thumbnail} alt={product.title} width={"100%"} height={"80%"}/>
       </div>
       <div className={styles.pricePlusButton}>
        <p className='body1'>${product.price}</p>
         <div style={{width:"24px",height:"24px",backgroundColor:"var(--color-blue)",borderRadius:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:'pointer'}} onClick={()=>addProductToCart(product)}>
              <img src={plusSign} alt="plusSign" />
         </div>
       </div>

       <div className={styles.title}>
        <p className='body1 medium'>{product.title}</p>
       </div>
    </div>
  )
}

export default ProductCard
