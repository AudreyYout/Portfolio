import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Outcome = () => {
  const data = useStaticQuery(graphql`
    query {
      recapDesign: file(relativePath: { eq: "designSystem/recap.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beforeAfter: file(relativePath: { eq: "designSystem/beforeAfter.png" }) {
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
        <div className="g-grid__item ">
            <div className="l-outcome">
              <h2>Main Tools interfaces unified in a few months.</h2>
              <p>Agreeing on common language with the development team played an essential role in the React Design System success.
                Developers provided us with their needs and feedback, but they also significantly contributed to the project.
                They factorized repetitive components formerly unevenly implemented in the different screens and added them
                in the library so any team member could use them in the future.
              </p>
              <p>On the top of speeding up the product releases, involving stakeholders
                from the beginning made cross-team communication flow better and federated
                the all product team.</p>
              <div className="l-outcome__picture">
                <Img fluid={data.beforeAfter.childImageSharp.fluid} />
              </div>
            </div>
            <div className="l-outcome">
              <h2>A scalable solution reused in many occasions.</h2>
              <p>Thanks to its versatility, the design system allowed us
                to quickly customize and repurpose our components when designing
                PoC interfaces for pre-sales team's prospects.
              </p>
              <p>
                It also helped Saagie's contractors and marketing team to maintain
                the brand identity consistency on various side projects (such as company website,
                landing pages, flyers, etc.)
              </p>
            </div>
            <div className="l-outcome">
              <h2>Positive feedbacks from our clients</h2>
              <p> Our project received positive feedback from various departments.</p>
               <p>First, the development team appreciated how this library significantly enhanced their productivity.
                  It made product developing and testing way faster and improved its quality,
                   consistency, and accessibility. Reusing established components helped the team save hours
                   and days on repetitive coding and enabled them to focus on solving more critical functioning problems.
              </p>

                <p>In addition to this, being able to accelerate our product prototype iteration pace significantly
                  impacted both the sales and marketing teams. Their recurrent feedback not only helped the design team to challenge
                  and adjust our interfaces but also contributed to improving cross-services alignment.
                  The prototype release reviews were the perfect occasion for the various teams to learn from each other's experiences
                  and provide a clearer understanding of how and why things were done.
                  The sales and the marketing team, as a result, were regularly kept informed of the product improvements,
                   and therefore were able to adapt their pitch and update their clients accordingly.</p>



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
