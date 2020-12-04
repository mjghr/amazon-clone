import React from "react";
import "../Styles/home.css";
import Product from "./Product";
import id from "react-id-generator";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={id()}
            image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg"
            title="PlayStation 5 Console"
            rating={4}
            price={499.99}
          />
          <Product
            id={id()}
            image="https://m.media-amazon.com/images/I/61shiWYCJxL._AC_UY327_FMwebp_QL65_.jpg"
            title="MSI Gaming GeForce RTX 3090 24GB GDRR6X 384-Bit HDMI/DP Nvlink Torx Fan 3 Ampere Architecture OC Graphics Card (RTX 3090 Ventus 3X 24G OC)
"
            rating={5}
            price={2439}
          />
        </div>
        <div className="home__row">
          <Product
            id={id()}
            image="https://m.media-amazon.com/images/I/71umuN8XVeL._FMwebp__.jpg"
            title="New Apple iPhone 12 Pro Max (128GB, Silver) [Locked] + Carrier Subscription
"
            rating={3}
            price={1000}
          />
          <Product
            id={id()}
            image="https://images-na.ssl-images-amazon.com/images/I/61xq8SNSERL._AC_SL1500_.jpg"
            title="Dash DMW001RD Machine for Individual, Paninis, Hash Browns, & other Mini waffle maker, 4 inch, Red"
            rating={2}
            price={18.74}
          />
          <Product
            id={id()}
            image="https://m.media-amazon.com/images/I/41jfR+JnrcL._AC_UL480_FMwebp_QL65_.jpg"
            title="Schoenhut 30-Key Fancy Baby Grand with Bench,Black"
            rating={3}
            price={139.99}
          />
        </div>
        <div className="home__row">
          <Product
            id={id()}
            large={true}
            image="https://images-na.ssl-images-amazon.com/images/I/71cWNfXecfL._AC_SL1500_.jpg"
            title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR"
            rating={5}
            price={1105.86}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
