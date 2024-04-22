import React, { useContext } from "react";
import styles from "./HomePage.module.css";
import { Badge, Grid, IconButton } from "@mui/material";
import Slider from "../../components/Slider/Slider";
import ProductContext from "../../context/productContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

  const{productsData,cartData} = useContext(ProductContext);
  const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.usernameCart}>
            <h2>Hey, Rahul</h2>
            <Badge badgeContent={cartData.length} color="success"   anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}>
              <IconButton>
                <i class="fa-solid fa-cart-shopping fa-2xl" style={{color:"white"}} onClick={()=>navigate('/cart')}></i>
              </IconButton>
            </Badge>
            
           
        </div>

        <div className={styles.searchInput}>
        <form style={{display:"flex"}}>
            <button type="submit"></button>
            <input type="search" placeholder="Search Products or store" />
           
          </form>
        </div>

        <div className={styles.deliveryDetails}>
          <div>
            <h4 className="bold" style={{opacity:"0.5",marginBottom:"10px"}}>DELIVERY TO</h4>
            <h3 className="medium" >Green Way 3000, Sylhet</h3>

          </div>

          <div>
          <h4 className="bold" style={{opacity:"0.5",marginBottom:"10px"}}>FROM</h4>
          <h3 className="medium">1 Hour</h3>
          </div>
        </div>


        
        


      </div>


      <Slider/>


      <div className={styles.productsWrapper}>
         <h2 className="medium">Recommended</h2>

         <Grid container className={styles.productsCardsWrapper} spacing={1} >
          {
            productsData.map((product)=>{
              return(
                <Grid item xs={6} sm={6} md={4} lg={3} >
                  <ProductCard product={product} />
                </Grid>
              
              )
            })
          }

         </Grid>
      </div>



    </div>
  );
};

export default HomePage;
