import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './service/api';

function App() {

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await api.get('?page=0&size=99&winner=false&year=1980'); // No need to include the full base URL
        console.log(response)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
