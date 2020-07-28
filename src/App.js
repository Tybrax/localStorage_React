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
