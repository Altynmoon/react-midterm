import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Импортируйте файл стилей

import FeedPage from './components/FeedPage';
import PostPage from './components/PostPage';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="" className="nav-link">Лента</Link>
          </li>
          <li className="navbar-item">
            <Link to="/post/1" className="nav-link">Пост</Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile" className="nav-link">Профиль</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
