# React Hooks For Everyone
LevelUp Tutorials

## useState

React Hooks in Action for useState
```jsx
import React, { useState } from 'react';
const [ name, setName ] = useState('');
<input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
```
- Import `useState`
- Create a variable with useState that sets up what you want to put in it
- Add a way to interact with state on your component

## Refactoring a Class Component
Making a Toggle Component super simple!
```jsx
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
```

## useState Part II
We can pass `useState` from one component to another, allowing us to set the state from wherever we need to
```jsx
// formSubmit File
export const formSubmit = (value, setValue) => {
  console.log(value);
  setValue('');
}

// Our Application
<form onSubmit={e => {e.preventDefault();formSubmit(name, setName);}}>
...
</form>
```

## useEffect
`useEffect` is similar to the life cycle methods in classes. It runs every time the DOM is updated by React
```jsx
import React, { useState, useEffect } from 'react';

useEffect(() => {
  document.title = name;
});
```

## Creating Custom Hooks

