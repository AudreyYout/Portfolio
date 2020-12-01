import PropTypes from "prop-types"
import React from "react"
import downloadFile from '../../../images/CV-AudreyYout.pdf'

const HomeHeader = ({ siteTitle }) => (
  <header className="l-home-header as-image">
    <div className="l-page-wrapper l-home-header-container">
          <div className="l-home-header-intro">
            <div className="l-home-header-intro__header">
                <p><span>Hi there</span>, I'm</p>
                <h1>Audrey Yout</h1>
                <h2>UI &amp; UX Designer</h2>
            </div>
            <div className="l-home-header-intro__side">
              <p>I am a <strong>thoughtful and thorough </strong> designer, passionate about building <strong>neat and intuitive interfaces</strong>.
              </p>
              <a href={downloadFile} download className="a-button as--primary as--rounded"> Download CV </a>
            </div>
          </div>
    </div>
  </header>
)

HomeHeader.propTypes = {
  siteTitle: PropTypes.string,
}

HomeHeader.defaultProps = {
  siteTitle: ``,
}

export default HomeHeader
