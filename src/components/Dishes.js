import React, { useState, useEffect } from 'react';

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
  // Leaving this array blank will run this only once

  return (
    <>
      {dishes.map(dish =>(
      <article className="dish-card dish-card--withImage">
        <h3>{dish.name}</h3>
        <p>{dish.desc}</p>
        <ul>
          {dish.ingredients.map(ingredient =>  (
            <li>{ingredient}</li>
          ))}
        </ul>
      </article>
      ))}
    </>
  );
};

export default Dishes;
