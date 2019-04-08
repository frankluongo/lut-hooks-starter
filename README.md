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
