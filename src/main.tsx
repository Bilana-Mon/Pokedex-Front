import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import Info from './pages/Pokemon-Info';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="pokemon-info" element={<Info />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
