import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {StepCategory} from "../../molecules/steps/stepCategory"
import {StepContent} from "../../molecules/steps/stepContent"


const Process = () => {
  const data = useStaticQuery(graphql`
    query {
      designSystem: file(relativePath: { eq: "designSystem/thumbnail-designSystem.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      framer: file(relativePath: { eq: "designSystem/framer.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      git: file(relativePath: { eq: "designSystem/git.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plant: file(relativePath: { eq: "designSystem/plant.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      prototype1: file(relativePath: { eq: "designSystem/prototype.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      npm: file(relativePath: { eq: "designSystem/npm.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sketchLibrary: file(relativePath: { eq: "designSystem/sketchLib.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      atomicDesign: file(relativePath: { eq: "designSystem/atomicDesign.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bemit: file(relativePath: { eq: "designSystem/bemit.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      docZinter: file(relativePath: { eq: "designSystem/docZ-inter.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      docZmdx: file(relativePath: { eq: "designSystem/docZ-mdx.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      codeReact: file(relativePath: { eq: "designSystem/code-react.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      codeCSS: file(relativePath: { eq: "designSystem/code-CSS.png" }) {
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
          <StepCategory color="primary" title="Step 1: Designing a UI language"/>
        </div>
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepContent color="primary">
            <h2>Naming Convention</h2>
            <p>Given the project scale and its impacts on each tool's interface,
               our team decided to set up a naming convention to
              classify and trace our UI components throughout their complete life cycle, from the design stage to production.</p>
               <p>We needed this convention to fit the product and be universal enough to be clearly understood by each product team member.
               After discussion with the development team, we agreed on a language that would combine the best of both worlds: the <a href="https://bradfrost.com/blog/post/atomic-web-design/" target="_blank ">Atomic Design </a>
                approach and the clarity of the <a href="https://www.jamesturneronline.net/blog/bemit-naming-convention.html" target="_blank ">BEMIT</a> architecture.
            </p>
            <p> We settled on applying this naming convention from Sketch layers to testing,
              not forgetting code writing.</p>

            <div className="g-grid h-pt-lg ">
              <div className="g-grid__item as--2_3@sm">
                <div className="l-process__picture">
                  <Img fluid={data.atomicDesign.childImageSharp.fluid} />
                </div>
                <div className="caption">Atomic Design organizational structure used for each UI component</div>
              </div>
              <div className="g-grid__item as--2_3@sm">
                <div className="l-process__picture">
                  <Img fluid={data.bemit.childImageSharp.fluid} />
                </div>
                <div className="caption">New naming convention applied for each UI component when coding</div>
              </div>
            </div>
          </StepContent>
        </div>
      </div>
      <div className="l-process">
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepCategory color="primary" title="Step 2: Creating a collaborative UI component library "/>
        </div>
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepContent color="primary">
            <h2>Design System and collaborative tools</h2>
            <p> At the beginning of the project, our team only consisted of 3 designers who worked independently on different product features. In a concern of visual
              consistency between the various screen elements, we set up a shared <a href="https://www.sketch.com/docs/libraries/" target="_blank ">Sketch Library </a>
              to centralize, unify, and synchronize each of our UI components.
              We organized our component library in accordance with our naming convention: a folder per Atomic Design structure and a page per UI component (including its possible variants).
            </p>
            <p>
              Using a consistent and exhaustive UI Library considerably helped us spend less
              time figuring out the visual aspects of new complex component layouts (their
              smaller units being already defined upstream). We were, therefore, able
              to focus more on better usability and delightful experiences for our users.
            </p>
            <p>Then, we used <a className="as--projectLink" href="https://plantapp.io/" target="_blank ">Plant </a>
            plugin, a version control app, and Sketch plugin for designers to secure and track our library's entire version history.
            This plugin helped us to keep our respective prototypes automatically updated with the latest version of each component.
            </p>
            <div className="g-grid h-pt-lg ">
              <div className="g-grid__item as--2_3@sm">
                <div className="l-process__picture">
                  <Img fluid={data.sketchLibrary.childImageSharp.fluid} />
                </div>
                <div className="caption">Saagie Sketch library</div>
              </div>
            </div>
            <div className="g-grid h-pt-lg ">
              <div className="g-grid__item as--2_3@sm">
                <div className="l-process__picture">
                  <Img fluid={data.plant.childImageSharp.fluid} />
                </div>
                <div className="caption">Sharing element artboards via Plant: the team sync changes between each other.</div>
              </div>
            </div>
          </StepContent>
        </div>
      </div>

      <div className="l-process">
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepCategory color="ternary" title="Step 3: Building product prototypes"/>
        </div>
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepContent color="ternary">
          <h2>Testing and sharing the product vision</h2>
            <p>Our synchronized UI component library speeded up our design process.
              Besides this, it enabled us to easily create and iterate high fidelity prototypes that we could use for multiple purposes:</p>
              <ul>
                <li><p>1. To validate our user flows and improve our interaction design on different devices using
              <a href="https://www.framer.com/" target="_blank"> Framer</a>, a design and prototyping tool.</p>
              </li>
                <li><p>2. To clarify and explain UI component behaviors and transitions to the product team members.
                  A link to the prototype attached to each product story showing itself to be more effective than a long list of UI_UX acceptance criteria.</p>
                </li>
                <li><p>3. To communicate, align, and collect feedbacks before production or release by providing both the product and the sales teams with the same clear,
                        up-to-date, and accurate representation of the new interfaces.</p></li>
                <li><p>4. To keep all the stakeholders updated on the future versions of the product.</p></li>
              </ul>
            <div className="g-grid h-pt-lg ">
              <div className="g-grid__item as--2_3@sm">
                <div className="l-process__picture">
                  <Img fluid={data.framer.childImageSharp.fluid} />
                </div>
                <div className="caption">Component interaction testing with Framer</div>
              </div>
              <div className="g-grid__item as--2_3@sm ">
                <div className="l-process__picture">
                  <Img fluid={data.prototype1.childImageSharp.fluid} />
                </div>
                <div className="caption">Sketch Interactive Prototyping</div>
              </div>
            </div>
          </StepContent>
        </div>
      </div>

      <div className="l-process">
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepCategory color="secondary" title="Step 4: Publishing a live React Design System Library"/>
        </div>
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepContent color="secondary">
            <h2>Documentation Engine</h2>
            <p>Since we needed to find a simple and effective solution to deploy to production,
              we decided to lessen the development team's workload by transcribing our Sketch design system
              into a ReactJS front-end library. </p>
              <p>We aimed to build a live component library
              where end-users would only have to copy and paste the code they need without worrying about the CSS or HTML part.</p>
              <p>We naturally looked to <a className="as--projectLink" href="https://www.docz.site/" target="_blank"> DocZ</a>, a zero-configuration documentation engine,
              to publish our documentation using markdown and javascript only.
              We tried to explicit the context and use of each component as much as possible. This "sandbox" process revealed itself to be very useful when validating our visual grammar's coherence.
              It also helped us in identifying and fixing defective components.
              </p>
            <div className="g-grid h-pt-lg ">
              <div className="g-grid__item as--2_3@sm">
                <div className="l-process__picture ">
                  <Img fluid={data.docZinter.childImageSharp.fluid} />
                </div>
                <div className="caption">DocZ: Form Password Component documentation (User view)</div>
              </div>
              <div className="g-grid__item as--2_3@sm">
                <div className="l-process__picture">
                  <Img fluid={data.docZmdx.childImageSharp.fluid} />
                </div>
                <div className="caption"> DocZ: Form Password Component documentation (Markdown file) </div>
              </div>
            </div>
          </StepContent>
        </div>
      </div>


      <div className="l-process">
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepCategory color="secondary" title="Step 5: Implementing the Components"/>
        </div>
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepContent color="secondary">
            <h2> Code</h2>
              <p> To extend our design system portability and make it reusable and compatible with any other digital side projects,
                we decided to provide a "CSS Only" code alternative for each ReactJS element.</p>
              <p>Luckily, each of Saagie's design team members possessed HTML, CSS, and ReactJs coding skills.
                We, therefore, started the code implementation while ensuring its compliance with our naming convention.
                 This extra mile allowed us to cut down on design and rework time and facilitated communication with the development team.
              </p>
            <div className="g-grid h-pt-lg ">
              <div className="g-grid__item as--2_3@sm">
                <div className="l-process__picture">
                  <Img fluid={data.codeCSS.childImageSharp.fluid} />
                </div>
                <div className="caption"> Form Password: Component Styling on DocZ</div>
              </div>
              <div className="g-grid__item as--2_3@sm">
                <div className="l-process__picture">
                  <Img fluid={data.codeReact.childImageSharp.fluid} />
                </div>
                <div className="caption"> Form Password: React Component on Docz</div>
              </div>
            </div>
          </StepContent>
        </div>
      </div>

      <div className="l-process">
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepCategory color="secondary" title="Step 6: Sharing and Deploying"/>
        </div>
        <div className="g-grid as--no-wrap as--gutter-none as--stretch">
          <StepContent color="secondary">
            <h2> Git</h2>
            <p> We used <a className="as--projectLink" href="https://en.wikipedia.org/wiki/Git" target="_blank"> Git</a> to store and version our design system progression. Also, we applied the same Git Workflow as the development team to maintain consistency in product management.</p>
            <div className="g-grid h-pt-lg ">
              <div className="g-grid__item as--2_3@sm">
                <div className="l-process__picture">
                  <Img fluid={data.git.childImageSharp.fluid} />
                </div>
                <div className="caption"> Git activities on Sourcetree</div>
              </div>
            </div>
            <h2>NPM Repository</h2>
            <p>For developers to consume our library transparently, we stored our ReactJS design system on a dedicated <a className="as--projectLink" href="https://www.npmjs.com/package/saagie-ui?activeTab=readme" target="_blank"> NPM </a>repository freely accessible by the command line. This process allowed us to control the version number used while keeping our users informed about any breaking change or potential depreciated element issue.</p>
            <div className="g-grid h-pt-lg ">
              <div className="g-grid__item as--2_3@sm">
                <div className="l-process__picture">
                  <Img fluid={data.npm.childImageSharp.fluid} />
                </div>
                <div className="caption"> Saagie Design System NPM Repository</div>
              </div>
            </div>
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
