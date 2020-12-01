import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Card from "../../molecules/cards/cards"
import CardContent from "../../molecules/cards/cardContent"
import CardBackgroundImage from "../../molecules/cards/cardBackgroundImage"
import PropTypes from "prop-types"


const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      designSystem: file(relativePath: { eq: "works/thumbnail-designSystem-BW.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      product: file(relativePath: { eq: "works/thumbnail-product-BW.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      workshop: file(relativePath: { eq: "works/thumbnail-workshop-BW.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      guidelines: file(relativePath: { eq: "works/thumbnail-guidelines-BW.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }


    }
  `)

  return (
<div className="l-section as--dark" id="works">
    <div className="l-page-wrapper">
      <h1>Selected works</h1>
      <div className="g-grid as--gutter-sm  as--stretch">
        <div className="g-grid__item as--1_2@xxs as--1_3@sm">
          <Card tag="a" className="as--link as--shape4" href="/designSystem" alt="Design System card">
            <CardBackgroundImage>
              <Img fluid={data.designSystem.childImageSharp.fluid} />
            </CardBackgroundImage>
            <CardContent color="secondary">
              React Design System
            </CardContent>
          </Card>
        </div>
        <div className="g-grid__item as--1_2@xxs as--1_3@sm">
          <div className="m-card as--link  as--disabled as--shape5">
            <div className="m-card__content">

            </div>
          </div>
        </div>
        <div className="g-grid__item as--1_2@xxs as--1_3@sm">
          <div className="m-card as--link  as--disabled as--shape2">
              <div className="m-card__content">
              </div>
          </div>
        </div>
        <div className="g-grid__item as--1_2@xxs as--disabled as--1_3@sm">
          <div className="m-card as--link  as--disabled as--shape6">
            <div className="m-card__content">
            </div>
          </div>
        </div>
        <div className="g-grid__item as--1_2@xxs as--1_3@sm">
          <div className="m-card as--link  as--disabled as--shape7">
            <div className="m-card__content">
            </div>
          </div>
        </div>
        <div className="g-grid__item as--1_2@xxs as--1_3@sm">
          <div className="m-card as--link as--disabled as--shape8" >
            <div className="m-card__content">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}


Works.propTypes = {
  children: PropTypes.node
};

export default Works
