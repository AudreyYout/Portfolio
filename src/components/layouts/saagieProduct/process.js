import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {StepCategory} from "../../molecules/steps/stepCategory"
import {StepContent} from "../../molecules/steps/stepContent"


const Process = () => {
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
  <div className="l-section as--light">
    <div className="l-page-wrapper">
      <h1>Process</h1>

      <div className="l-process" id="UI_UX">
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepCategory color="primary" title="Step 1: Identifying the users' needs"/>
        </div>
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepContent color="primary">
            <h2>Process</h2>
            <p>PiratePirate heave
            down lass spanker fluke coffer scurvy
            bucko no kdvhbjvzhvzvbzvizvivizviisivsiviuvksdvisudgvisdgiugvsui iugiugiugfizufgizugfizugfig iuzfizug fiz  </p>
            <p>PiratePirate heave
            down lass spanker fluke coffer scurvy
            bucko no kdvhbjvzhvzvbzvizvivizviisivsiviuvksdvisudgvisdgiugvsui iugiugiugfizufgizugfizugfig iuzfizug fiz  </p>
            <div className="g-grid h-pt-md h-pb-sm">
              <div className="g-grid__item as--1_2@sm">
                <Img fluid={data.designSystem.childImageSharp.fluid} />
              </div>
              <div className="g-grid__item as--1_2@sm">
                <Img fluid={data.designSystem.childImageSharp.fluid} />
              </div>
            </div>
            <p>PiratePirate heave
            down lass spanker fluke coffer scurvy
            bucko no kdvhbjvzhvzvbzvizvivizviisivsiviuvksdvisudgvisdgiugvsui iugiugiugfizufgizugfizugfig iuzfizug fiz  </p>
            <p>PiratePirate heave
            down lass spanker fluke coffer scurvy
            bucko no kdvhbjvzhvzvbzvizvivizviisivsiviuvksdvisudgvisdgiugvsui iugiugiugfizufgizugfizugfig iuzfizug fiz  </p>
          </StepContent>
        </div>
      </div>

      <div className="l-process" id="dev">
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepCategory color="secondary" title="Step 2: Identifying the users' needs"/>
        </div>
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepContent color="secondary">
            <h2>Process</h2>
            <p>PiratePirate heave
            down lass spanker fluke coffer scurvy
            bucko no kdvhbjvzhvzvbzvizvivizviisivsiviuvksdvisudgvisdgiugvsui iugiugiugfizufgizugfizugfig iuzfizug fiz  </p>
            <p>PiratePirate heave
            down lass spanker fluke coffer scurvy
            bucko no kdvhbjvzhvzvbzvizvivizviisivsiviuvksdvisudgvisdgiugvsui iugiugiugfizufgizugfizugfig iuzfizug fiz  </p>
            <div className="g-grid h-pt-md h-pb-sm">
              <div className="g-grid__item as--1_2@sm">
                <Img fluid={data.designSystem.childImageSharp.fluid} />
              </div>
              <div className="g-grid__item as--1_2@sm">
                <Img fluid={data.designSystem.childImageSharp.fluid} />
              </div>
            </div>
            <p>PiratePirate heave
            down lass spanker fluke coffer scurvy
            bucko no kdvhbjvzhvzvbzvizvivizviisivsiviuvksdvisudgvisdgiugvsui iugiugiugfizufgizugfizugfig iuzfizug fiz  </p>
            <p>PiratePirate heave
            down lass spanker fluke coffer scurvy
            bucko no kdvhbjvzhvzvbzvizvivizviisivsiviuvksdvisudgvisdgiugvsui iugiugiugfizufgizugfizugfig iuzfizug fiz  </p>
          </StepContent>
        </div>
      </div>






    </div>
  </div>
  );
}

Process.propTypes = {
  children: PropTypes.node
};

export default Process
