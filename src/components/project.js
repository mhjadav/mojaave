import React from 'react';
import {StaticQuery,graphql} from 'gatsby';
import Img from 'gatsby-image';

export default () => (
    <StaticQuery
        query={graphql`
            query projectList {
                allProjectsJson{
                    edges{
                        node{
                            name
                            link
                            description
                            id
                            image{
                                childImageSharp{
                                    fluid(maxHeight: 250) {
                                    ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={ data => {
        const { allProjectsJson: { edges: projects } } = data;
        return (<section id="projects">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="section-title">
                        <h1 className="display-5">Projects</h1>
                        <h6 className="display-6">Pieces of my work</h6>
                        <span className="animate-border border-green  ml-auto mr-auto"></span>
                    </div>
                    <div className="row">
                        {
                            projects.map(project => (
                                <div key={project.id} className="col-md-6 col-xs-12">
                                    <div className="card shadow-lg">
                                        {project.node.image &&
                                        <div className="card-img-top">
                                            <Img fluid={project.node.image.childImageSharp.fluid} alt={project.node.name} />
                                        </div>}
                                        <div className="card-body">
                                            <h5 className="card-title">{project.node.name}</h5>
                                            <p className="card-text">
                                                {project.node.description}
                                            </p>
                                            {project.node.link && <a href={project.node.link} className="btn btn-warning">Go To {project.node.name}</a>}
                                        </div>
                                    </div>
                                </div>)
                            )
                        }
                    </div>
                </div>
            </div>
        </section>)}
        }
    />
);
