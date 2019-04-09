import React, { useRef } from 'react';
import Toggle from './utils/Toggle';
import { formSubmit } from './utils/Forms';
import { useTitleInput } from './utils/useTitleInput';

const Application = () => {
  const [ name, setName ] = useTitleInput('');
  const ref = useRef();

  return (
    <main className="main-wrapper" ref={ref}>
      <h1>Level Up Dishes</h1>
      <Toggle>Toggle Content</Toggle>
      <form onSubmit={e => {e.preventDefault();formSubmit(name, setName);}}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        <input type="submit" value="submit"/>
      </form>
    </main>
  );
};

export default Application;
