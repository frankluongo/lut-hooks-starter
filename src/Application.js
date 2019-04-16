import React, { useRef } from 'react';
import Toggle from './utils/Toggle';
import { formSubmit } from './utils/Forms';
import { useTitleInput } from './hooks/useTitleInput';
import Dishes from './components/Dishes';
import DishForm from './components/DishForm';
import UserContext from './contexts/UserContext';

const Application = () => {
  const [ name, setName ] = useTitleInput('');
  const ref = useRef();

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <main className="main-wrapper" ref={ref}>
        <h1>Level Up Dishes</h1>

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
