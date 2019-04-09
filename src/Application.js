import React, { useState, useEffect } from 'react';
import Toggle from './utils/Toggle';
import { formSubmit } from './utils/Forms';

const Application = () => {
  const [ name, setName ] = useState('');

  useEffect(() => {
    document.title = name;
  });

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle>Toggle Content</Toggle>
      <form onSubmit={e => {e.preventDefault();formSubmit(name, setName);}}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
};

export default Application;
