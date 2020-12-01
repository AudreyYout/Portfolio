import React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="l-footer">
    <div className="l-page-wrapper">
    Copyright ©  {new Date().getFullYear()} Audrey.yout
    <span>Built with
    <a className="as--light" href="https://www.gatsbyjs.org" target="_blank ">Gatsby</a></span>
      {` `}
    </div>
  </footer>
)

export default Footer
