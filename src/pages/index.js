import React from "react";
import Helmet from "react-helmet";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import {
  siteTitle,
  siteDescription,
  siteUrl
} from "../../site-config";
import profilePic from "../static/images/mahipat-bike.jpg";
import favicon32 from "../static/images/mahipat32.jpg";
import favicon16 from "../static/images/mahipat16.jpg";
import ogImage from "../static/images/mahipat250.jpg";

export default () => {
  return (<React.Fragment>
    <Helmet
      title={siteTitle}
      meta={[
        { name: "description", content: siteDescription },
        { property: "og:url", content: siteUrl },
        { property: "og:image", content: "https://www.mojaave.com" + ogImage },
        { property: "og:title", content: siteTitle },
        { property: "og:type", content: "portfolio" },
        { property: "og:description", content: siteDescription }
      ]}
      link={[
        { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 },
        { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 }
      ]}
    />
    <Helmet>
      <link rel="canonical" href="https://www.mojaave.com" />
      {/* <script src='https://www.google.com/recaptcha/api.js'></script> */}
    </Helmet>
    <h1 hidden>
      full stack developer, freelancer in usa, font end developer in usa, full stack developer in usa, javascript developer, software engineer, web developer, react developer, reactjs developer, node developer, nodejs developer, graphql developer, angular developer, typescript developer, front end developer.
      {siteDescription}
      </h1>
    <div className="container-fluid">
      <header>
        <nav className="navbar navbar-expand navbar-dark">
          <div className="navbar-collapse  justify-content-center collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#header">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://medium.com/@mjadav" target="_blank">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section id="header">
      <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="col-12">
              <div className="card bg-dark shadow-lg">
                <div className="card-body bg-warning about">
                  <div className="row">
                    <div className="col-md-3 col-xs-12 text-center">
                      <img src={profilePic} className="shadow-lg p-2 photo" alt="Mahipat Jadav"/>
                    </div>
                    <div className="col-md-9 col-xs-12 about-text">
                        <h1 className="card-text text-black">Hi, I'm Mahipat Jadav</h1>
                        <h4 className="card-text text-black">Full stack developer based in India</h4>
                        <hr/>
                        <h4>
                        <div>
                          <a title="Github" href="https://github.com/mhjadav/mojaave" className="card-link text-black"><i className="fa fa-github" /></a>
                          <a title="Twitter" href="https://twitter.com/mhjadav" className="card-link text-black"><i className="fa fa-twitter" /></a>
                          <a title="Email" href="mailto:mj@mojaave.com" className="card-link text-black"><i className="fa fa-envelope" /></a>
                          <a title="Linkedin" href="https://www.linkedin.com/in/mhjadav/" className="card-link text-black"><i className="fa fa-linkedin" /></a>
                          <a title="Skype" href="skype:mahipat2?chat" className="card-link text-black"><i className="fa fa-skype" /></a>
                        </div>

                        </h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-dark shadow-lg">
                  <h5 className="card-title">My Toolbox</h5>
                  <h2 className="card-text">Javascript, HTML5, CSS3, Typescript, ReactJs, Redux, NodeJs, GraphQl, Gatsby, Angular, Bootstrap, DB(Mongodb, Redis), Git, Webpack, Jquery, Lodash & some more.</h2>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
   <div>
  <section id="about">
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="section-title">
          <h1 className="display-5">About Me</h1>
          <span className="animate-border ml-auto mr-auto"></span>
        </div>
        <blockquote className="blockquote">
          <h5 className="card-text text-black">
            Since last 7 years, I have been working as full stack developer with companies in india, I have designed and developed reliable, fast, engaging & responsive websites, 
            with strong focus on performance & responsive design using the latest technologies. check out in <a href="#projects">Projects section</a>.
          </h5>
          <h5 className="card-text text-black">
            If you are looking for the full stack developer, 
            who will take care of all aspect of your project
            then you are in the right place
            <a href="#contact">Let's Talk</a>
          </h5>
        </blockquote>
      </div>
    </div>
  </section>
  <section id="projects">
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="section-title">
          <h1 className="display-5">Projects</h1>
          <h6 className="display-6">Pieces of my work</h6>
          <span className="animate-border border-green  ml-auto mr-auto"></span>
        </div>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Cleartrip Pvt Ltd</h5>
                <p className="card-text">As a full stack developer, my job is to contribute to hotels project at Cleartrip, during my journey at Cleartrip I have done some project includes - revamp filters design, GST Integration, Hotel Shortlist, Load Search page fast by prefetching data, Revamp details page, Pre-applied wallet balance and some more</p>
                <a href="https://cleartrip.com" className="btn btn-warning">Cleartrip.com</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">RPWS web video conferancing(Polycom)</h5>
                <p className="card-text">As a software engieer at Polycom, I have almost spent 2 years, During my period over here I have worked on lots of issues on an existing product(Web video conferencing application), I also i have integrated some of the important features in the product, Second i also have worked on more product to integrate web content share in desktop.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Vierbit.com</h5>
                <p className="card-text">
                  As a full stack developer with vierbit, i have designed and developed, fast and responsive website, It's a portfolio website for Veirbit, where we are adding some new features to find a domain, contact support, submit data to make a website.
                  We have added feature to search domain, and submit website requirement.
                </p>
                <a href="https://vierbit.com" className="btn btn-warning">Vierbit.com</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Pholio Polycom</h5>
                <p className="card-text">
                  I have played the role of front end developer in Phoilo Project, Portal is for validation of video endpoints, Main modules in this are OAuth Login, List Registered devices, Add/Edit device
                  After registering the device with this portal user can join a meeting from that device
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Theminimall (Alpine Health)</h5>
                <p className="card-text">My career started as a web developer with alpine health, It's a E-Commerce portal for sellers and buyers
                  Sellers can create their store and upload products of different range
                  The main component on buyer side are search product, list products, add to cart, payment, Account/Order management
                  CC Avenue payment gateway is integrated with this product</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Packingwood.in</h5>
                <p className="card-text">It's a static portfolio web site for a wooden box manufacturing company, Hosted on git hub.</p>
                <a href="https://packingwood.in" className="btn btn-warning">Packingwood.in</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="card  shadow-lg bg-dark">
              <div className="card-body">
                <h5 className="card-title">Check out my recent work on Github.</h5>
                <a href="https://github.com/mhjadav" className="btn btn-success">Github Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
</div>
    </div>
    <header>
        <nav className="navbar navbar-expand navbar-dark">
          <div className="navbar-collapse  justify-content-center collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <h1 hidden>
      full stack developer, freelancer in usa, font end developer in usa, full stack developer in usa, javascript developer, software engineer, web developer, react developer, reactjs developer, node developer, nodejs developer, graphql developer, angular developer, typescript developer, front end developer.
      {siteDescription}
      </h1>
  </React.Fragment>)
};
