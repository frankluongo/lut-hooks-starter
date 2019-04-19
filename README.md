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

## Fetching Data With useEffect
[API Source](https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes)
```jsx
import React, { useState, useEffect } from 'react';

const Dishes = () => {
  const apiUrl = 'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes';
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setDishes(data);
  }

  useEffect(() => {

  });

  return (
    <>
      {dishes.map(dish =>(
      <article className="dish-card dish-card--withImage">
        <h3>{dish.name}</h3>
        <p>{dish.desc}</p>
        <ul>
          {dish.ingredients.map(ingredient =>  (
            <li>{ingredient}</li>
          ))}
        </ul>
      </article>
      ))}
    </>
  );
};

export default Dishes;
```

## Controlling useEffect
The code below will prevent useEffect from continuously re-running
```jsx
  useEffect(() => {
    fetchDishes();
  }, []);
  // Leaving this array blank will run this only once
```

## Controlling useEffect Part II
Putting a value in the array you pass as the second argument of `useEffect` will dictate when it updates


## useLayoutEffect To Wait For DOM
[Use Hooks](https://usehooks.com/)
The useLayoutEffect runs whenever the DOM changes
```jsx
import { useLayoutEffect } from 'react';

export default function useBodyScrollLock() {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
  })
}
```


## What is Cleanup
The return function is what runs when it's time to clean up the hooks
```jsx
import { useLayoutEffect } from 'react';

export default function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = 'hidden';

    return function cleanUpBodyLock () {
      document.body.style.overflow = originalOverflow;
    }
  // Doing this will ensure that this only runs one time
  }, [])
}
```


## More Complex Custom Hooks
Creating a Toggle that will turn off when the user clicks outside of it.

We have a reference for the element being clicked and a handler that runs a function when our listener is triggered
```jsx
import { useEffect } from 'react';

export default function useOnClickOutside (ref, handler) {
  useEffect(() => {

    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler()
    }

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    }
  }, []);
}
```


## 3rd Party Hooks
It's pretty easy to grab 3rd party hooks

```jsx
const Dishes = () => {
  const apiUrl = 'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes';
  const { data } = useAbortableFetch(apiUrl);
  if (!data) return null;

  return (
    <>
      {data.map((dish, index) =>(
      <article className="dish-card dish-card--withImage" key={index}>
        <h3>{dish.name}</h3>
        <p>{dish.desc}</p>
        <ul>
          {dish.ingredients.map((ingredient, index) =>  (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </article>
      ))}
    </>
  );
};

export default Dishes;
```

## Basic Animation With React Spring

```jsx
import { useSpring, animated } from 'react-spring';

const Application = () => {
  const animProps = useSpring({ opacity: 1, from: { opacity: 0 }});

  return (
    ...
      <animated.h1
        style={animProps}>
        Level Up Dishes
      </animated.h1>
    ...
  )
};
```


## Where to Go Next
- Visit React's Documentation about Hooks
- [Awesome React Hooks](https://github.com/rehooks/awesome-react-hooks)
- [Collection of React Hooks](https://nikgraf.github.io/react-hooks/)
- [Use Hooks](https://usehooks.com/)
