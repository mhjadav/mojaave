import React from 'react';

function Contact() {
    return (
        <section id="contact">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="section-title">
                    <h1 className="display-5">Contact Me</h1>
                    <h6 className="display-6">Let`s build something unique</h6>
                    <span className="animate-border mt-4 ml-auto mr-auto"></span>
                    <h5 className="display-6 mt-4">
                        <a  style={{marginLeft: "5px"}} title="Github" href="https://github.com/mhjadav/mojaave" className="card-link text-black"><i className="fa fa-github" /></a>
                        <a title="Twitter" href="https://twitter.com/mhjadav" className="card-link text-black"><i className="fa fa-twitter" /></a>
                        <a title="Email" href="mailto:mj@mojaave.com" className="card-link text-black"><i className="fa fa-envelope" /></a>
                        <a title="Linkedin" href="https://www.linkedin.com/in/mhjadav/" className="card-link text-black"><i className="fa fa-linkedin" /></a>
                        <a title="Skype" href="skype:mahipat2?chat" className="card-link text-black"><i className="fa fa-skype" /></a>
                    </h5>
                </div>
                {/* <div className="row justify-content-center mt-5">
                <div className="col-md-6 col-xs-11">
                <div className="col-xs-12 about-text">
                    <h5 className="display-6">Leave a message below </h5>
                </div>
                    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input id="username" name="emailto" type="hidden" value="mj@mojaave.com"/>
                    <div className="form-group">
                        <input type="email" className="form-control" id="txt-email" name="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="txt-name" name="name" placeholder="Enter Name" required />
                    </div>
                    <div className="form-group">
                        <textarea rows="5" className="form-control" id="txt-message" name="message" placeholder="Enter Message" required />
                    </div>
                    <div className="form-group">
                        <div className="g-recaptcha" data-sitekey="6Lf8T3wUAAAAABApAbCUyOesm57GnqanN0Ir8dFG"></div>
                    </div>
                    <div className="form-group justify-content-end">
                        <button type="submit" className="btn btn-warning">Send</button>
                    </div>
                    </form>
                </div>
                </div> */}
                </div>
            </div>
        </section>
    );
}

export default Contact;