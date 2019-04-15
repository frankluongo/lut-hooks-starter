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
```jsx
import { useState, useEffect } from 'react';

export function useTitleInput(initialValue) {
  const [value, setValue] = useState('');

  useEffect(() => {
    document.title = value;
  })

  return [value, setValue];
}
```

## Use Refs with useRef
Refs allow you to reference elements in the DOM and change them
```jsx
import React, { useRef } from 'react';
const ref = useRef();
<main className="main-wrapper" ref={ref}>
```

## Context With Hooks
UserContext.js
```jsx
import { createContext } from 'react';
const UserContext = createContext();
export default UserContext;
```

Application.js
```jsx
<UserContext.Provider
  value={{
    user: false
  }}
>
  ...
</UserContext.Provider>
```

Toggle.js
```jsx
import React, { useState, useContext } from "react";
import UserContext from '../contexts/UserContext';

const Toggle = (props) => {
  const { user } = useContext(UserContext);
  if (!user) return null;
}
```

## Advanced State Management With useReducer
This is an alternative to Redux for managing complex state
```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        count: state.count + 1
      }
    case 'minus':
      return {
        count: state.count - 1
      }
    case 'reset':
      return {
        count: initialState.count
      }
    default:
      throw new Error();
  }
}


const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({type: 'add'})}>+</button>
      <button onClick={() => dispatch({type: 'minus'})}>-</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
    </div>
  )
}

export default Counter;
```


## useMemo For Expensive Functions
Will keep functions from running on re-render
```jsx
import React, { useMemo } from 'react';
const title = 'Level Up Dishes';
const titleReversed = useMemo(() => reverseWord(title), [title]);
```

## useDebugValue For Custom Hook Libraries
This is a way to provide debugging information for custom hooks that you create
```jsx
import { useState, useEffect, useDebugValue } from 'react';

export function useTitleInput(initialValue) {
  const [value, setValue] = useState('');

  useEffect(() => {
    document.title = value;
  })

  useDebugValue(value);

  return [value, setValue];
}
```
