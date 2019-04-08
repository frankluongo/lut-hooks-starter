import React, { useState } from 'react';

const Application = () => {

  /*
    Expected Format
    const [ value, setValue ] = useState(initialStateValue);
  */
  const [ name, setName ] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
    </div>
  );
};

export default Application;
