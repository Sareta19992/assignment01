import React from 'react';
export default function services() {
    return (
        <>
            <div>
                <h1>Services</h1><hr></hr>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h4>Web interface design</h4>
                    <img className="services-img" src="./src/assets/img/4.webp" width="80" height="100" alt="Web Developing" />
                    <h4>C#</h4>
                    <img className="services-img" src="./src/assets/img/5.webp" width="200" height="100" alt="C-sharp" />
                    <h4>Mobile Apps</h4>
                    <img className="services-img" src="./src/assets/img/6.webp" width="200" height="100" alt="App" />
                </div>
            </div>



        </>
    );
}
