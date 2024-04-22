import { useEffect, useState } from "react";
import styles from "./Slider.module.css"
import Carousel from "../Carousel/Carousel";
import CardImage from "../../images/Image-Icon.png"
const data =[

    {
        id: 1,
        
        image: CardImage,
        offer:20
    },
    {
        id: 2,
        
        image: CardImage,
        offer:30
    },
    {
        id: 3,
        
        image: CardImage,
        offer:50
    },
    {
        id: 4,
        
        image: CardImage,
        offer:70
    },
    {
        id: 5,
        
        image: CardImage,
        offer:40
    },
    {
        id: 6,
        
        image: CardImage,
        offer:90
    }
]

const Card = ({ele}) => {
    return (
      <div className={styles.cardWrapper} key={ele.id}>
        <div>
            <img src={ele.image} alt="CardImage" />

        </div>

        <div>
            <h3 className="medium" style={{marginBottom:"10px"}}>Get</h3>
            <h2 className="bold" style={{marginBottom:"10px"}}>{ele.offer}% OFF</h2>
            <h4 className="medium" style={{marginBottom:"10px"}}>On first 03 Order</h4>

        </div>
      </div>
    );
  };


const Slider = () => {

const [screenWidth, setScreenWidth] = useState(window.innerWidth);
const [slidesView, setSlidesView] = useState(screenWidth < 768 ? 2 : 3);



useEffect(() => {
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

 
  return () => {
    window.removeEventListener("resize", handleResize);
  };

  
}, []);


useEffect(() => {
  
    setSlidesView(screenWidth < 768 ? 2 : 3);
 
  
}, [screenWidth]);
return (
  <div className={styles.wrapper}>
      <Carousel data={data} renderCardComponent={(ele)=> <Card ele={ele} />}   slidesView={slidesView}/>
  </div>
);
};

export default Slider;