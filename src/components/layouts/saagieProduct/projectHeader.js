import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Badge from "../../atoms/badges"
import Img from "gatsby-image"


const ProjectHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      saagieProduct: file(relativePath: { eq: "saagieProduct/thumbnail-product.png" }) {
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
          <div className="g-grid__item as--1_2@xxs as--3_5@xs as--1_2@sm ">
              <div className="l-project-header__description">
                  <h1 id="design-system">Saagie Product</h1>
                  <p> Capstan mizzenmast snow bounty long clothes Port rum mizzen Letter of Marque Sink me shrouds black jack six pounders tackle topsail.</p>
              </div>
              <div className="l-project-header__tags">
                <Badge color="primary"/>
                <Badge color="secondary"/>
              </div>
          </div>
          <div className="g-grid__item as--1_2@xxs as--2_5@xs as--1_2@sm as--auto ">
            <div className="l-project-header__image">
              <div className="l-project-header__image-shaper as--shape4">
                <Img fluid={data.saagieProduct.childImageSharp.fluid} />
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
