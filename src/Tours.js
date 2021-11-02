import React, { useState } from "react";
import tour from "./tour-data";
import "./App.css";

const Tours = () => {
  const [tours, setTours] = useState(tour);

  return (
    <div>
      {tours.map((e) => {
        const { id, title, price, image, desc } = e;
        return (
          <div key={id} className="tour-container">
            <img src={image} alt={title} />
            <div className="head-price">
              <h3>{title}</h3>
              <span>${price}</span>
            </div>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Tours;
