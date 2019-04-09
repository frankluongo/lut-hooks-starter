import React, { useState, useContext } from "react";
import UserContext from '../contexts/UserContext';

const Toggle = (props) => {
  const { children } = props;
  const [ isToggled, setIsToggled ] = useState(false);
  const { user } = useContext(UserContext);

  if (!user) return null;

  return (
    <div>
      <button onClick={() => { setIsToggled(!isToggled); }}>Toggle</button>
      {isToggled && children}
    </div>
  );
}

export default Toggle;
