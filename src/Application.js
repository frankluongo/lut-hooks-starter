import React, { useRef, useMemo } from 'react';
import Toggle from './utils/Toggle';
import { formSubmit } from './utils/Forms';
import { useTitleInput } from './utils/useTitleInput';
import UserContext from './contexts/UserContext';

const Application = () => {
  const [ name, setName ] = useTitleInput('');
  const ref = useRef();

  const reverseWord = word => {
    console.log('function called');
    return word.split("").reverse().join("")
  };

  const title = 'Level Up Dishes';
  const titleReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <UserContext.Provider
      value={{
        user: false
      }}
    >
      <main className="main-wrapper" ref={ref}>
        <h1>{titleReversed}</h1>
        <Toggle>Toggle Content</Toggle>
        <form onSubmit={e => {e.preventDefault();formSubmit(name, setName);}}>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
          <input type="submit" value="submit"/>
        </form>
      </main>
    </UserContext.Provider>
  );
};

export default Application;
