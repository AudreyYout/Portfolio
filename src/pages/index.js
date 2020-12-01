import React from "react"
import "../scss/global.scss"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/helpers/seo"
import { Helmet} from "react-helmet";
import Layout from "../components/layouts/Layout"
import Topbar from "../components/layouts/topbar"
import HomeHeader from "../components/layouts/homePage/header-homepage"
import Specialities from "../components/layouts/homePage/specialities"
import Works from "../components/layouts/homePage/works"
import About from "../components/layouts/homePage/about"
import Footer from "../components/layouts/footer"



const IndexPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <Layout>
        <SEO title="Home" />
        <Helmet>
          <meta name="apple-mobile-web-app-title" content="Audrey Yout"/>
          <meta name="application-name" content="Audrey Yout"/>
          <meta name="msapplication-TileColor" content="#8338EC"/>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="robots" content="index, follow"/>
          <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
          <link rel="manifest" href="site.webmanifest"/>
          <link rel="mask-icon" href="safari-pinned-tab.svg" color="#8338EC"/>
        </Helmet>
        <Topbar siteTitleTop={data.site.siteMetadata.title } />
        <HomeHeader/>
        <Specialities/>
        <Works/>
        <About/>
        <Footer/>
      </Layout>
  )
}


export default IndexPage
