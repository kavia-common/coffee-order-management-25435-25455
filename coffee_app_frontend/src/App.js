import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// Router setup
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeFigma from './pages/HomeFigma';
import NotesFigma from './pages/NotesFigma';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const Home = () => (
    <div className="App">
      <header className="App-header">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Temporary navigation link for discovery */}
        <p>
          Preview Figma Home Screen: <Link to="/home-figma" className="App-link">/home-figma</Link>
        </p>
        <p>
          Preview Notes Screen: <Link to="/notes-figma" className="App-link">/notes-figma</Link>
        </p>
      </header>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-figma" element={<HomeFigma />} />
        <Route path="/notes-figma" element={<NotesFigma />} />
      </Routes>
    </Router>
  );
}

export default App;
