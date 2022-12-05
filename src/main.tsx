import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
