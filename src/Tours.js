import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./button";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [tours, setTours] = useState([]);

  const getTours = () => {
    axios.get(url).then((response) => {
      setTours(response.data);
    });
  };

  useEffect(() => {
    getTours();
  }, []);
  
  if (tours.length === 0)
    return (
      <div>
        <h4>Out of tours in space</h4>
        <button onClick={() => getTours()}>Get tours</button>
      </div>
    ); else
  return (
    <>
    {tours.map((e) => {
      const { id, name, image, info, price } = e
      return (
        <div key={id} className="tour-container">
          <img src={image} alt={name} />
          <div className="head-price">
            <h3>{name}</h3>
            <span>${price}</span>
          </div>
          <p>{info}</p>

          <Button name={'clear-tour'}/>
        </div>
      );
    })}
      {/* <Tours tours={tours}/> */}
    </>
  );
};
export default Tours;
