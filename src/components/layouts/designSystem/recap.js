import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Recap = () => {
  const data = useStaticQuery(graphql`
    query {
      recapDesign: file(relativePath: { eq: "designSystem/recap.png" }) {
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
      <h1>Process architecture</h1>
      <div className="g-grid">
        <div className="g-grid__item ">
          <div className="l-outcome__picture">
            <Img fluid={data.recapDesign.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

Recap.propTypes = {
  children: PropTypes.node
};

export default Recap
