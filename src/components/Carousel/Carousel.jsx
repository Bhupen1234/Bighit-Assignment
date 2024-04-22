import React, { useEffect } from "react";

import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "./Carousel.module.css";
import { Navigation ,Autoplay} from "swiper/modules";


const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    
       
        console.log( swiper.slideTo(0,500))
    // eslint-disable-next-line
  }, [data]);
 
  return <></>
};

const Carousel = ({ data, renderCardComponent,slidesView}) => {
    
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={[ Navigation,Autoplay ]}
        slidesPerView={slidesView}
        spaceBetween={40}
        navigation={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        allowTouchMove
      >
        {/* <Controls data={data}/> */}
       
   
        {
          data && data.map((ele,index)=>( <SwiperSlide key={index}>{renderCardComponent(ele)}</SwiperSlide>))
        }
      </Swiper>
    </div>
  );
};

export default Carousel;
