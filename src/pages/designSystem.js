import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/helpers/seo"
import Topbar from "../components/layouts/topbar"
import Footer from "../components/layouts/footer"
import ProjectHeader from "../components/layouts/designSystem/projectHeader"
import Details from "../components/layouts/designSystem/details"
import Issue from "../components/layouts/designSystem/issue"
import Process from "../components/layouts/designSystem/process"
import Recap from "../components/layouts/designSystem/recap"
import Outcome from "../components/layouts/designSystem/outcome"
import "../scss/global.scss"

const DesignSystem = () => (
  <Layout>
    <SEO title="Design System" />
    <Topbar />
    <ProjectHeader/>
    <Details/>
    <Issue/>
    <Process/>
    <Recap/>
    <Outcome/>
    <Footer/>
  </Layout>
)

export default DesignSystem
