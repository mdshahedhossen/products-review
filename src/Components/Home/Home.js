import React from "react";
import { useNavigate } from "react-router-dom";
import useCars from "../../hooks/UsesCar";
import Cars from "../Cars/Cars";
import "./Home.css";

const Home = () => {
  
  const[cars,setCars]=useCars()
  let navigate=useNavigate()
  const showAllreviews=()=>{
    const path=`/reviews`
    navigate(path)
  }

  return (
    <div className="main-home-container">
      <div className="home-container">

        <div className="text-container">
          <h1 className="future-car">Your Next Car</h1>
          <h1 className="best-car">Your Best Car</h1>
          <p>
            A car (or automobile) is a wheeled motor vehicle used for
            transportation. Most definitions of cars say that they run primarily
            on roads, seat one to eight people, have four wheels, and mainly
            transport people rather than goods.
          </p>
          <button className="live-btn">Live Demo</button>
        </div>

        <div className="picture-container">
          <img src="pic.png" alt="" />
        </div>
        
      </div>

      <div className="custom-reviews-container">
        <div>
          <h1 className="customer-reviews-text">Customers-reviews (3)</h1>
        </div>

        <div className="custom-reviews">
            {
                cars.map(car=><Cars 
                    key={car.id}
                    car={car}
                ></Cars>).slice(1,4)
            }
        </div>
        <div>
          <button className="show-all-btn" onClick={showAllreviews}>Show All Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
