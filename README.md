# LocalStorage in ReactJS

*Store data in the browser using React useState & useEffect hooks.*

The initial state is the value already stored by the browser or an empty string if no data was previously stored.

```javascript
  const [value, setValue] = useState(
      localStorage.getItem('localStorageValue') || ''
  );
```

The **onChange function** is called when a user input some text. It updates the component state with the input's value.

```javascript
  const onChange = (event) => {
    setValue(event.target.value);
  };
```

The **useEffect hook** takes the state's value and place it in the local storage. 

```javascript
  useEffect(() => {
    localStorage.setItem("localStorageValue", value);
  }, [value]);
```

Entire component code :

```javascript
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState(
      localStorage.getItem('localStorageValue') || ''
   );

  const onChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("localStorageValue", value);
  }, [value]);

  return (
    <div className="App">
      <header className="App-header">
        <input value={value} type="text" onChange={onChange} />
        <p>{value}</p>
      </header>
    </div>
  );
}

export default App;
```
