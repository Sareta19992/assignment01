import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className='Home'>


            <main>
                <h1>Welcome to My Portfolio</h1></main>
            <hr></hr>

            <div id='info'>
                <div id='button-i'>
                    <Link to="/about" className='about-button'>
                        About Me
                    </Link>

                </div>
                <div id='button-i'>
                    <Link to="/projects" className='about-button'>
                        Projects
                    </Link>
                </div>
                <div id='button-i'>
                    <Link to="/contact" className='about-button'>
                        contact
                    </Link>
                </div>
                <div id='button-i'>
                    <Link to="/services" className='about-button'>
                        services
                    </Link>
                </div>
            </div>




        </div>
    );
};

export default Home;
