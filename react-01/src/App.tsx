import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/posts">Post Link</Link>
        </li>
        <li>
          <Link to="/posts/:id">Post Detail</Link>
        </li>
        <li>
          <Link to="/posts/new">Post new</Link>
        </li>
        <li>
          <Link to="/posts/edit/:id">Post edit</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>home page</h1>} />
        <Route path="/posts" element={<h1>post List page</h1>} />
        <Route path="/posts/:id" element={<h1>post Detail page</h1>} />
        <Route path="/posts/new" element={<h1>post new page</h1>} />
        <Route path="/posts/edit/:id" element={<h1>post edit page</h1>} />
        <Route path="/profile" element={<h1>profile page</h1>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
