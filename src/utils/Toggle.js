import React, { useState, useContext } from "react";
import UserContext from '../contexts/UserContext';
import ToggleContext from '../contexts/UserContext';

const Toggle = (props) => {
  const { children } = props;
  const [ isToggled, setIsToggled ] = useState(false);
  const { user } = useContext(UserContext);

  if (!user) return null;

  return (
    <div>
      <button onClick={() => { setIsToggled(!isToggled); }}>Toggle</button>
      <ToggleContext.Provider value={{ setIsToggled }}>
        {isToggled && children}
      </ToggleContext.Provider>
    </div>
  );
}

export default Toggle;
