import React from 'react';

function About() {
    return (
        <section id="about">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="section-title">
                        <h1 className="display-5">About Me</h1>
                        <span className="animate-border ml-auto mr-auto"></span>
                    </div>
                    <blockquote className="blockquote">
                        <h5 className="card-text text-black">
                            Since last 7 years, I have been working as ui developer with companies in india, I have designed and developed reliable, fast, engaging & responsive websites, 
                            with strong focus on performance & responsive design using the latest technologies. check out in <a href="#projects">Projects section</a>.
                        </h5>
                        <h5 className="card-text text-black">
                            If you are looking for the ui developer, 
                            who will take care of all aspect of your project
                            then you are in the right place
                            <a href="#contact">Let's Talk</a>
                        </h5>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}

export default About;
