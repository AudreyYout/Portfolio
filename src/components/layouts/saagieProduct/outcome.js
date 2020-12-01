import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Outcome = () => {
  const data = useStaticQuery(graphql`
    query {
      designSystem: file(relativePath: { eq: "designSystem/thumbnail-designSystem-BW.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <div className="l-section as--light" id="about">
    <div className="l-page-wrapper">
    <h1>Outcome</h1>
      <div className="g-grid as--full as--gutter-xl@md as--stretch@xs">
        <div className="g-grid__item  as--3_5@xs">
          <div className="l-outcome">
              <p><strong>Solving consumer problems</strong>
              and providing them with the <strong>
              best possible experience</strong>
              has always been my prime concern.
              </p>
              <p><strong>Solving consumer problems</strong>
              and providing them with the <strong>
              best possible experience</strong>
              has always been my prime concern.
              </p>
          </div>
        </div>
        <div className="g-grid__item as--2_5@xs">
            <div className="l-outcome__picture">
            <Img fluid={data.designSystem.childImageSharp.fluid} />
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

Outcome.propTypes = {
  children: PropTypes.node
};

export default Outcome
