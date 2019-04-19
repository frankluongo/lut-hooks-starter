import React, { useRef, useContext } from 'react'
import useBodyScrollLock from '../hooks/BodyScrollLock';
import useOnClickOutside from '../hooks/useOnClickOutside';
import ToggleContext from '../contexts/UserContext';

const DishForm = () => {
  const ref = useRef();
  const { setIsToggled } = useContext(ToggleContext);
  useOnClickOutside(ref, () => setIsToggled(false));
  useBodyScrollLock();

  return (
    <div className="dish-card" ref={ref}>
      <form action="">
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name"/>
        </div>
      </form>
    </div>
  )
}

export default DishForm;
