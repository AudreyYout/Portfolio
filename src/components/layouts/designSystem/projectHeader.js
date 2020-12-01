import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Badge from "../../atoms/badges"
import Img from "gatsby-image"
import { Link } from "react-router-dom"


const ProjectHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      designSystem: file(relativePath: { eq: "designSystem/thumbnail-designSystem.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className="l-project-header">
      <div className="l-page-wrapper">
        <div className="g-grid as--full as--no-wrap@xs as--middle@xs as--bottom@xxs"  >
          <div div className="g-grid__item as--1_2@xxs as--3_5@xs as--1_2@sm ">
              <div className="l-project-header__description">
                  <h1 id="design-system">React Design System</h1>
                  <p> Building a <strong>flexible ReactJs and CSS component</strong> library to <strong>standardize UI </strong>and <strong>accelerate</strong> any product <strong>development process</strong>.</p>
                  <a className="as--projectLink" href="https://7-design-system.public.prod.saagie.io/v/latest/" target="_blank ">Visit website</a>
              </div>
              <div className="g-grid as--no-wrap as--auto as--gutter-xxs">
                <div className="g-grid__item">
                  <Badge color="primary"/>
                </div>
                <div className="g-grid__item">
                  <Badge color="ternary"/>
                </div>
                <div className="g-grid__item">
                  <Badge color="secondary"/>
                </div>
              </div>
          </div>
          <div className="g-grid__item as--1_2@xxs as--2_5@xs as--1_2@sm as--auto ">
            <div className="l-project-header__image">
              <div className="l-project-header__image-shaper as--shape4">
                <Img fluid={data.designSystem.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}


ProjectHeader.propTypes = {
  siteTitle: PropTypes.string,
}

ProjectHeader.defaultProps = {
  siteTitle: ``,
}

export default ProjectHeader
