import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import Home from './routes/Home';
import Profile from './routes/Profile';
import NavBar from './components/nav-bar';

function App() {
    return (
        <Router>s
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>);
