import React from 'react';
import {StaticQuery,graphql} from 'gatsby';
import Img from 'gatsby-image';

export default () => (
    <StaticQuery
        query={graphql`
            query projectImage {
                allFile(filter: {relativePath: {in: ["cleartrip.png", "vierbit.png", "nxdigital.png", "thairpy.png", "plivo.png", "packingwood.png"]}}){
                    edges{
                        node{
                            childImageSharp {
                                fluid(maxHeight: 250) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={ data => (<section id="projects">
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
                                <div className="card-img-top">
                                    <Img fluid={data.allFile.edges[2].node.childImageSharp.fluid} alt="full stack developer" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Plivo.com</h5>
                                    <p className="card-text">
                                        Plivo project is to migrate current plivo website to new design and some more extra features, This project helped me add some more skill to my profile like Jekyll, Algolia Search, Font optimization, I helped them to improve performance by optimizing image, fonts, compress HTML, CSS, js and use preload for critical resources.
                                    </p>
                                    <a href="http://plivo.com" className="btn btn-warning">Plivo.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="card shadow-lg">
                                <div className="card-img-top">
                                    <Img fluid={data.allFile.edges[5].node.childImageSharp.fluid} alt="full stack developer" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Thairpysalonandspa.ca</h5>
                                    <p className="card-text">
                                        Thairpy salon and spa, Canada based salon and spa, i have design and developed portfolio website for them, this project is static data website with attractive design and 100% usable offline, It's PWA, i have added some ui features like, play video in background, add slider for team member, and add other services in menu.
                                    </p>
                                    <a href="http://thairpysalonandspa.ca" className="btn btn-warning">Thairpysalonandspa.ca</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="card shadow-lg">
                                <div className="card-img-top">
                                    <Img fluid={data.allFile.edges[3].node.childImageSharp.fluid} alt="full stack developer" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">NxDigital.com.au</h5>
                                    <p className="card-text">
                                        Nx Digital is the first project design and developed after i have started working as full time freelancer, i have used gatsbyjs, this is out of the box PWA, also inegrated blog on this site,
                                        I have used gatsby plugin and wordpress json api to fetch blog details, also integrated netlify form for email notifications.
                                    </p>
                                    <a href="https://nxdigital.com.au" className="btn btn-warning">NxDigital.com.au</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="card shadow-lg">
                                <div className="card-img-top">
                                    <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} alt="full stack developer" />
                                </div>
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
                                <div className="card-img-top">
                                    <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} alt="full stack developer" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Cleartrip Pvt Ltd</h5>
                                    <p className="card-text">As a full stack developer, my job is to contribute to hotels project at Cleartrip, during my journey at Cleartrip I have done some project includes - revamp filters design, GST Integration, Hotel Shortlist, Load Search page fast by prefetching data, Revamp details page, Pre-applied wallet balance and some more</p>
                                    <a href="https://cleartrip.com" className="btn btn-warning">Cleartrip.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="card shadow-lg">
                                <div className="card-img-top">
                                        <Img fluid={data.allFile.edges[4].node.childImageSharp.fluid} alt="full stack developer" />
                                    </div>
                                <div className="card-body">
                                    <h5 className="card-title">Packingwood.in</h5>
                                    <p className="card-text">
                                        It's a static portfolio website for a wooden box manufacturing company, This is one of the early days project i got, i have used simple html,css, javascript to build this website. 
                                    </p>
                                    <a href="https://packingwood.in" className="btn btn-warning">Packingwood.in</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    <h5 className="card-title">Service now projects</h5>
                                    <p className="card-text">
                                    I worked with multiple clients to build a web application using ServiceNow, my job with these clients is to build UI for them and also build some tool using ServiceNow depends on their requirement, Client includes - Patientrails, Nokia, CareAR
                                    </p>
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
                    
                    </div>
                </div>
            </div>
        </section>)}
    />
);
