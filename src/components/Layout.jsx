import React from 'react';
import { Link } from 'react-router-dom';


export default function Layout() {
    return (
        <>
            <nav>
                <img src="./src/assets/img/sara.png" alt="Logo" className="logo" />
                <Link to="/Home">Home</Link> |
                <Link to="/about"> about </Link> |
                <Link to="/projects">projects</Link> |
                <Link to="/services"> services</Link> |
                <Link to="/contact"> contact </Link>
            </nav>
            <br />
            <hr />
        </>
    );
}