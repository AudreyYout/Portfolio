import React, { Fragment } from "react"
import Header from "../components/layouts/homePage/header-homepage"
import Works from "../components/layouts/homePage/works"
import About from "../components/layouts/homePage/about"
import "../scss/global.scss"
import Specialities from "../components/layouts/homePage/specialities"

const Home= ({ children }) => (
    <Fragment>
        <Header/>
        <Specialities/>
        <Works/>
        <About/>
    </Fragment>
)

export default Home
