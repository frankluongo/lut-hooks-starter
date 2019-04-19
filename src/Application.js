import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';

import Toggle from './utils/Toggle';
import { formSubmit } from './utils/Forms';
import { useTitleInput } from './hooks/useTitleInput';
import Dishes from './components/Dishes';
import DishForm from './components/DishForm';
import UserContext from './contexts/UserContext';



const Application = () => {
  const [ name, setName ] = useTitleInput('');
  const ref = useRef();
  const animProps = useSpring({ opacity: 1, from: { opacity: 0 }});

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <main className="main-wrapper" ref={ref}>
        <animated.h1
          style={animProps}>
          Level Up Dishes
        </animated.h1>

        <Toggle>
          <DishForm />
        </Toggle>

        <form onSubmit={e => {e.preventDefault();formSubmit(name, setName);}}>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
          <input type="submit" value="submit"/>
        </form>
        <Dishes />
      </main>
    </UserContext.Provider>
  );
};

export default Application;
