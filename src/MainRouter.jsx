import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import Projects from './components/projects';
import Services from './components/services';
import Contact from './components/contact';


function MainRouter() {
    console.log('MainRouter component rendered');
    return (
        <Routes>

            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
    );
}

export default MainRouter;

