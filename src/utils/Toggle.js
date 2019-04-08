import React, { useState } from "react";

const Toggle = (props) => {
  const { children } = props;
  const [ isToggled, setIsToggled ] = useState(false);

  return (
    <div>
      <button onClick={() => { setIsToggled(!isToggled); }}>Toggle</button>
      {isToggled && children}
    </div>
  );
}

export default Toggle;
