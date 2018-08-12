import React from "react";
import Helmet from "react-helmet";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";

import {
  siteTitle,
  siteDescription,
  siteKeywords,
  siteURL
} from "../../data/site-config";
import profilePic from "../static/images/mahipat-bike.jpg";
import favicon32 from "../static/images/mahipat32.jpg";
import favicon16 from "../static/images/mahipat16.jpg";
import ogImage from "../static/images/mahipat250.jpg";

export default () => (
  <React.Fragment>
    <Helmet
      title={siteTitle}
      meta={[
        { name: "description", content: siteDescription },
        { name: "keywords", content: siteKeywords },
        { property: "og:url", content: siteURL },
        { property: "og:image", content: ogImage },
        { property: "og:title", content: siteTitle },
        { property: "og:description", content: siteDescription }
      ]}
      link={[
        { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 },
        { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 }
      ]}
    />
    <div className="container-fluid">
      <header>
        <nav className="navbar navbar-expand navbar-dark">
          <div className="navbar-collapse  justify-content-center collapse" id="navbarsExample02">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="https://mojaave.com">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section id="header">
      <div className="jumbotron">
          <div className="container">
            <div className="col-12">
              <div className="card bg-dark shadow-lg">
                <div className="card-body bg-warning about">
                  <div className="row">
                    <div className="col-md-3 col-xs-12">
                      <img src={profilePic} className="shadow-lg p-2 photo" alt="Mahipat Jadav"/>
                    </div>
                    <div className="col-md-9 col-xs-12 about-text">
                        <h1 className="card-text text-black">Hi, I'm Mahipat Jadav</h1>
                        <h4 className="card-text text-black">Full stack developer based in India</h4>
                        <hr/>
                        <h4>
                        <div>
                          <a title="Github" href="https://github.com/mhjadav/gatsby-starter-bootstrap-cv" className="card-link text-black"><i className="fa fa-github" /></a>
                          <a title="Twitter" href="https://twitter.com/mhjadav" className="card-link text-black"><i className="fa fa-twitter" /></a>
                          <a title="Email" href="mailto:mj@mojaave.com" className="card-link text-black"><i className="fa fa-envelope" /></a>
                          <a title="Linkedin" href="https://www.linkedin.com/in/mahipat-jadav-987986158/" className="card-link text-black"><i className="fa fa-linkedin" /></a>
                        </div>

                        </h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-dark shadow-lg">
                  <h5 className="card-title">My Toolbox</h5>
                  <p className="card-text">Javascript, HTML5, CSS3, Typescript, ReactJs, Redux, NodeJs, GraphQl, Gatsby, Angular, Bootstrap, DB(Mongodb, Redis), Git, Webpack, Jquery, Lodash & some more.</p>
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
        <h1 className="display-5">About Me</h1>
        <hr />
        <p className="lead card-text text-black">
          Since last 7 years, I have been working as Full stack developer on various projects, which includes Cleartrip.com (Hotels And Flight Booking Platform), Polycom's RPWS (Online video conference web app), Theminimall.com (ECommerce Website) &amp; set of a static website (packingwood.in, vierbit.com, bizintrade.com, test.mojaave.com &amp; mojaave.com)
        </p>
        <p className="lead card-text text-black">
          Currently, I'm doing freelance work, If you think that I would be a good fit then 
          <button type="button" className="btn btn-dark m-3">Let's Talk</button>
        </p>
      </div>
    </div>
  </section>
  <section id="project">
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-5">Projects</h1>
        <hr />
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Cleartrip Pvt Ltd</h5>
                <p className="card-text">As a UI engineer, my job is to contribute to hotels project at Cleartrip, during my journey at Cleartrip I have done some project includes - revamp filters design, GST Integration, Hotel Shortlist, Load Search page fast by prefetching data, Revamp details page, Pre-applied wallet balance and some more</p>
                <a href="https://cleartrip.com" className="btn btn-warning">Cleartrip.com</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">RPWS web video conferancing(Polycom)</h5>
                <p className="card-text">At Polycom, I have almost spent 2 years, During my period over here I have worked on lots of issues on an existing product(Web video conferencing application), I also i have integrated some of the important features in the product, Second i also have worked on more product to integrate web content share in desktop.</p>
                <a href="https://polycom.com" className="btn btn-warning">Polycom.com</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Vierbit.com</h5>
                <p className="card-text">
                  It's a portfolio website for Veirbit, where we are adding some new features to find a domain, contact support, submit data to make a website.
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
                <p className="card-text">Portal is for validation of video endpoints
                  Main modules in this are OAuth Login, List Registered devices, Add/Edit device
                  After registering the device with this portal user can join a meeting from that device
                </p>
                <a href="https://polycom.com" className="btn btn-warning">Polycom.com</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Theminimall (Alpine Health)</h5>
                <p className="card-text">E-Commerce portal for sellers and buyers
                  Sellers can create their store and upload products of different range
                  The main component on buyer side are search product, list products, add to cart, payment, Account/Order management
                  CC Avenue payment gateway is integrated with this product</p>
                <a href="https://theminimall.com" className="btn btn-warning">theminimall.com</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Packingwood.in</h5>
                <p className="card-text">It's a static portfolio web site for a wooden box manufacturing company, Hosted on git hub.</p>
                <a href="https://packingwood.in" className="btn btn-warning">Packingwood.com</a>
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
</div>
    </div>
    <header>
        <nav className="navbar navbar-expand navbar-dark">
          <div className="navbar-collapse  justify-content-center collapse" id="navbarsExample02">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <p className="nav-link">
                  Built with <svg className="heart-loader" xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlnssvg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 90" version="1.1">
                                <g className="heart-loader__group">
                                <path className="heart-loader__square" strokeWidth={1} fill="none" d="M0,30 0,90 60,90 60,30z" />
                                <path className="heart-loader__circle m--left" strokeWidth={1} fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0" />
                                <path className="heart-loader__circle m--right" strokeWidth={1} fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0" />
                                <path className="heart-loader__heartPath" strokeWidth={2} d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0" />
                                </g>
                            </svg> using <a  href="https://www.gatsbyjs.org/">Gatsby</a> & Hosted on <a  href="https://www.github.com/mhjadav"> Github </a>
                </p>
              </li>
              
            </ul>
          </div>
        </nav>
      </header>
  </React.Fragment>
);
