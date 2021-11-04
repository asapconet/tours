import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./button";
import Loading from "./loading";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [knowMOre, setKnowMore] = useState(false);

  //delete tours handler
  const takeOutTour = (id) => {
    const freshTours = tours.filter((e) => e.id !== id);
    setTours(freshTours);
    return console.log("yes the man is funtioning");
  };

  //API, and loading handling function
  const getTours = () => {
    setLoading(true);
    axios.get(url).then((response) => {
      setTours(response.data);
      setLoading(false);
    });
  };

  //before and after getTours regulator
  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0)
    return (
      <div className="refresher">
        <h4>You've visited everywhere in the world, go to your village</h4>

        <button className="btn" onClick={() => getTours()}>
          Take me back to the available tours
        </button>
      </div>
    );
  return (
    <>
      <h1>Check our available tours</h1>
      <div className="underlining"></div>
      {tours.map((e) => {
        const { id, name, image, info, price } = e;
        return (
          <div key={id} className="tour-container">
            <img src={image} alt={name} />
            <div className="head-price">
              <h3>{name}</h3>
              <span>${price}</span>
            </div>
            <p>
              {knowMOre ? info : `${info.substring(0, 166)}`}
              <button onClick={() => setKnowMore(!knowMOre)}>
                {knowMOre ? "it's okay, reduce text" : "...know more"}
              </button>
            </p>
            <Button onClick={() => takeOutTour(id)} />
          </div>
        );
      })}
      {/* <Tours tours={tours}/> */}
    </>
  );
};
export default Tours;
