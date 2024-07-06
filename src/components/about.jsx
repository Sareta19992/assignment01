import React from 'react';

export default function about() {
    return (
        <>
            <h1>About Me</h1>
            <div >

                <hr />
                <br />
                <div className="about-container">
                    <img className='project-img' src="./src/assets/img/me.webp" width="300" height="300" alt="Avatar" />
                </div><br></br>
                <h2>Sara Hamoleila</h2>
                <div >
                    <p className="mission-statement">
                        My name is Sara, and I am a student of Software Engineering with a focus on Artificial Intelligence. I have a strong interest in web design and developing innovative software solutions.

                        Outside of my professional pursuits, I enjoy reading fiction, practicing yoga, and exploring new cuisines.

                        My goal is to create impactful software that addresses real-world problems and promotes sustainability. I aim to continue learning and growing in the field of technology to contribute to a better future for all.
                    </p>
                </div>
                <br></br>
                <br></br>
                <button className="btn-download" type="button">
                    <a id="aboutText" class="btn btn-xl btn-outline-dark" href="./src/assets/res/resume.docx">
                        <i class="fas fa-download me-2 "></i>
                        Download My Resume
                    </a>

                </button>
            </div>
            <br></br>

        </>

    );
}