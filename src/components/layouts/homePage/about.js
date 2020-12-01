import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import downloadFile from '../../../images/CV-AudreyYout.pdf'



const About = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImageSquare: file(relativePath: { eq: "home/about.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutImageRect: file(relativePath: { eq: "home/about-rect.png" }) {
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
      <div className="g-grid as--full as--gutter-sm@xxs as--gutter-sm@md as--stretch@xs">
        <div className="g-grid__item  as--order-2 as--order-1@xs as--2_5@xs">
            <div className="p-home__about-picture">
            </div>
        </div>
        <div className="g-grid__item as--order-1 as--order-2@xs as--gutter-xs@xs as--3_5@xs">
          <div className="p-home__about-content">
            <h1>About me</h1>
            <div className="introduction">
            <p><strong>Solving consumer problems</strong> and providing them with the <strong>
            best possible experience</strong> has always been my prime concern.</p>
            <p>Formerly Customer Services professional,
            now UI/UX advocate. I apply my experience, skills, and abilities when designing products that are
            <strong> easy to use</strong>,<strong> visually pleasing</strong>, and <strong>technically elegant</strong>.</p><p>My affinity for <strong>Front-end Development</strong>,
            combined with my strong <strong>collaboration skills </strong>
            allow me to participate in all steps of the product life-cycle while at the same time
            <strong> ensuring coherence</strong> between user needs and product capabilities.
            </p>
            </div>
            <div className="g-grid as--gutter-sm as--fill">
              <div className="g-grid__item as--auto">
                <div className="g-grid as--gutter-sm">
                  <div className="g-grid__item as--auto">
                    <a className=" a-button as--social-media" id="Linkedin" target="_blank " href="https://www.linkedin.com/in/audrey-yout">
                      <svg fill="#F47E00" height="32px" viewBox="-8 0 511 512" width="512pt" >
                        <path d="m111.898438 160.664062h-96.398438c-8.285156 0-15 6.71875-15 15v321.335938c0 8.285156 6.714844 15 15 15h96.398438c8.285156 0 15-6.714844 15-15v-321.335938c0-8.28125-6.714844-15-15-15zm-15 321.335938h-66.398438v-291.335938h66.398438zm0 0"/>
                        <path d="m63.703125 0c-34.851563 0-63.203125 28.351562-63.203125 63.195312 0 34.851563 28.351562 63.199219 63.203125 63.199219 34.847656 0 63.195313-28.351562 63.195313-63.199219 0-34.84375-28.347657-63.195312-63.195313-63.195312zm0 96.394531c-18.308594 0-33.203125-14.890625-33.203125-33.199219 0-18.304687 14.894531-33.195312 33.203125-33.195312 18.304687 0 33.195313 14.890625 33.195313 33.195312 0 18.308594-14.890626 33.199219-33.195313 33.199219zm0 0"/>
                        <path d="m352.910156 158.542969c-22.800781 0-45.273437 5.496093-65.398437 15.777343-.683594-7.652343-7.109375-13.65625-14.941407-13.65625h-96.40625c-8.28125 0-15 6.71875-15 15v321.335938c0 8.285156 6.71875 15 15 15h96.40625c8.285157 0 15-6.714844 15-15v-176.734375c0-22.734375 18.5-41.230469 41.234376-41.230469 22.734374 0 41.226562 18.496094 41.226562 41.230469v176.734375c0 8.285156 6.71875 15 15 15h96.402344c8.285156 0 15-6.714844 15-15v-194.933594c0-79.140625-64.382813-143.523437-143.523438-143.523437zm113.523438 323.457031h-66.398438v-161.734375c0-39.277344-31.953125-71.230469-71.226562-71.230469-39.28125 0-71.238282 31.953125-71.238282 71.230469v161.734375h-66.402343v-291.335938h66.402343v11.082032c0 5.769531 3.308594 11.027344 8.511719 13.523437 5.199219 2.496094 11.371094 1.785157 15.875-1.820312 20.3125-16.292969 44.851563-24.90625 70.953125-24.90625 62.597656 0 113.523438 50.925781 113.523438 113.523437zm0 0"/>
                      </svg>
                    </a>
                  </div>
                  <div className="g-grid__item as--auto">
                    <a className="a-button as--social-media" id="Mail" href="mailto:audrey.yout@gmail.com" target="_blank ">
                      <svg fill="#F47E00"  x="0px" y="0px" viewBox="0 0 512 512" styles="enable-background:new 0 0 32 32;" space="preserve">
                            <path d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
                              C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
                              M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
                              L338.213,256L482,112.212V399.787z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="g-grid__item as--auto">
              <a href={downloadFile} download className="a-button as--primary as--rounded"> Download CV </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

About.propTypes = {
  children: PropTypes.node
};

export default About
