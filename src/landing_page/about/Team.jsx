import React from 'react';

function Team() {
    return (
        <div className="container  mb-5 ">
            <h2 className='team-heading border-top'>The Mind Behind TreadX</h2>
            <div className="row">
                <div className="col-4 Team-my-profile">
                    <div className='profile-Photo'><img src="media/images/Aditya.jpg" alt="Aditya photo" /></div>
                    <h2>Aditya Chaudhary</h2>
                    <p>Founder & Developer, TreadX</p>
                </div>
                <div className="col-8 team-about-me mb-5">
                    <p>Hi, I’m Aditya Chaudhary, a Full Stack Web Developer and Data Structures enthusiast, currently pursuing my B.Tech (Final Year) from AKTU University, Lucknow.</p>
                    <p>I created TreadX, a project inspired by Zerodha, to combine my passion for technology and trading. Through TreadX, I’m exploring how powerful web technologies and clean design can make financial platforms more accessible and user-friendly.</p>
                    <p>I specialize in MERN Stack (MongoDB, Express.js, React.js, Node.js) and enjoy solving complex problems using Data Structures and Algorithms (DSA). My goal is to build efficient, scalable, and impactful web applications that bridge technology and innovation.</p>
                    <p>When I’m not coding, I enjoy learning about the stock market, experimenting with new tech tools, and improving my problem-solving skills.</p>
                    <p>Connect with me : <a href="https://github.com/Adityanshu45">GitHub</a>/ <a href="https://www.linkedin.com/in/adityanshu45">LinkedIn</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;