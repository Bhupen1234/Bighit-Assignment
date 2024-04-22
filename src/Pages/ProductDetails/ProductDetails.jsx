import React, { useContext, useEffect, useState } from 'react';
import styles from './ProductDetails.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Rating } from "primereact/rating";
import Carousel from '../../components/Carousel/Carousel';
import {ReactComponent as RedHeart} from "../../images/Red_heart.svg"
import ProductContext from '../../context/productContext';
import { useSnackbar } from 'notistack';
import { Badge, IconButton } from '@mui/material';

const Card = ({ele}) => {
    return (
      <div className={styles.cardWrapper}>
        
            <img src={ele} alt="CardImage"  width={"100%"}/>


       

    
      </div>
    );
  };

const ProductDetails = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const {addProductToCart,cartData} = useContext(ProductContext)
    const {enqueueSnackbar} = useSnackbar()
    const navigate = useNavigate()
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://dummyjson.com/products/${parseInt(id)}`);
        setProductDetail(response.data);
    };


    const handleAddToCart =(productDetail)=>{
           addProductToCart(productDetail) 
    }

    const handleBuyProduct =(productDetail)=>{
          addProductToCart(productDetail)
          navigate("/cart")
    }

    useEffect(() => {
        fetchProductDetail();
    }, [id]);




    

    

    return (
        <div className={styles.wrapper}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div className={styles.backArrow} onClick={()=>navigate('/')} >
                   <h4 className='bold'>{"<"}</h4>
                </div>

                <div>
                <Badge badgeContent={cartData.length} color="success"   anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}>
              <IconButton>
                <i class="fa-solid fa-cart-shopping fa-2xl" onClick={()=>navigate('/cart')}></i>
              </IconButton>
            </Badge>
                </div>
            </div>

          
            <div className={styles.title}>
                <h1>{productDetail.brand}</h1>
                <h1 className="bold">{productDetail.title}</h1>
            </div>

            <div className={styles.rating}>
            <Rating value={productDetail.rating} readOnly cancel={false} />
            </div>

            <div className={styles.imageCrousel}>
            {productDetail && <Carousel data={productDetail.images} renderCardComponent={(ele)=> <Card ele={ele} />}   slidesView={1}/>}
            </div>


            <div className={styles.price}>
                <h3 className="bold" style={{display:"inline-block",paddingRight:"5px"}}>${productDetail.price}</h3>  <span className={styles.discountPill}>{productDetail.discountPercentage}% Off</span>
            </div>




            <div className={styles.button} style={{marginTop:"22px"}}>
                <button className={styles.addToCartButton} onClick={()=>handleAddToCart(productDetail)}>Add to cart</button>
                <button className={styles.buyNowButton} onClick={()=>handleBuyProduct(productDetail)}>Buy now</button>   
            </div>


            <div className={styles.details}>
               <h3>Details</h3>

               <p style={{opacity:"0.5"}}>{productDetail.description}</p>
            </div>

          
            
        </div>
    );
};

export default ProductDetails;
