import React from 'react';
export default function pojects() {

    return (

        <div>
            <h1>Projects</h1>
            <hr />
            <div id="project1" className="project-container">
                <h2>Project 1:  HomeSmart App</h2>
                <img className="project-img" src="./src/assets/img/1.png" width="600" height="600" alt="Term Project" />
                <p className="project-paragraph">
                    <br />
                    This is my project in Software engineer, which called (HomeSmart), this app can help the owner manage household affairs remotely
                </p>

            </div>

            <div id="project2" className="project-container">
                <h2> Project 2: Multiplication Table Generator</h2>
                <img className="project-img" src="./src/assets/img/2.png" width="500" height="300" alt="SlideShow" />
                <p className="project-paragraph">
                    <br />
                    This project is a "Multiplication Table Generator" that allows users to input the number of rows and columns to generate a custom multiplication table dynamically. The user interface is visually appealing with a vibrant background, an image, and easy-to-use input fields and buttons for generating the table.

                </p>

            </div>

            <div id="project3" className="project-container">
                <h2>Project 3: picture form API</h2>
                <img className="project-img" src="./src/assets/img/3.png" width="500" height="300" alt="Project4" />
                <p className="project-paragraph">
                    <br />
                    This project showcases images retrieved from an API, displaying them dynamically on the webpage. The user interface features a simple, clean layout with a yellow background and a header that reads "Picture from API," followed by the displayed images
                </p>

            </div>

        </div>

    );
};
