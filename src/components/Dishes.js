import React, { useState, useEffect } from 'react';
// import useAbortableFetch from 'use-abortable-fetch';

/*const Dishes = () => {
  const apiUrl = 'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes';
  const { data } = useAbortableFetch(apiUrl);
  if (!data) return null;

  return (
    <>
      {data.map((dish, index) =>(
      <article className="dish-card dish-card--withImage" key={index}>
        <h3>{dish.name}</h3>
        <p>{dish.desc}</p>
        <ul>
          {dish.ingredients.map((ingredient, index) =>  (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </article>
      ))}
    </>
  );
};

export default Dishes; */

const Dishes = () => {
  const apiUrl = 'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes';
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setDishes(data);
  }

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <>
      {dishes.map((dish, index) =>(
      <article className="dish-card dish-card--withImage" key={index}>
        <h3>{dish.name}</h3>
        <p>{dish.desc}</p>
        <ul>
          {dish.ingredients.map((ingredient, index) =>  (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </article>
      ))}
    </>
  );
};

export default Dishes;
