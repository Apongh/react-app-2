
import React, { useEffect } from 'react';
import './App.css';
function App() {


  const userData = async () => {
    const userData = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await userData.json()
    console.log(data)
  }

  useEffect(() => {
    userData()
  }, [])

  return (
    <React.Fragment>
      <h1>
        Hello from react app
      </h1>
    </React.Fragment>

  );
}

export default App;
