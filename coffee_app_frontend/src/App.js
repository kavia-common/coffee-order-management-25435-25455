import React, { useState, useEffect } from 'react';
import './App.css';

// Router setup
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomeFigma from './pages/HomeFigma';
import NotesFigma from './pages/NotesFigma';

/**
 * PUBLIC_INTERFACE
 * App
 * Root application component with routing and simple top navigation.
 * - Sets "/" to render the HomeFigma page by default.
 * - Preserves existing "/home-figma" and (renamed) "/notes-figma" routes.
 * - Includes a theme toggle and a simple top navbar to switch between Home and Notes.
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Simple top-level navigation bar to switch between Home and Notes
  const TopNav = () => (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderBottom: '1px solid var(--border-color)',
        background: 'var(--bg-primary)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}
      aria-label="Top navigation"
    >
      <div style={{ display: 'flex', gap: 12 }}>
        <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>
          Home
        </Link>
        <Link to="/notes-figma" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>
          Notes
        </Link>
      </div>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );

  return (
    <Router>
      <div className="App">
        <TopNav />
        <Routes>
          {/* Make HomeFigma render at root path */}
          <Route path="/" element={<HomeFigma />} />
          {/* Keep existing routes working */}
          <Route path="/home-figma" element={<HomeFigma />} />
          <Route path="/notes-figma" element={<NotesFigma />} />
          {/* Optional: handle unknown routes by redirecting to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
