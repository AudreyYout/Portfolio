import React from "react"

const Specialities = () => (
  <div className="l-section as--light">
    <div className="l-page-wrapper">
      <h1>What I do</h1>
      <div className="g-grid as--full as--gutter-sm  as--stretch@xxs">
        <div className="g-grid__item as--1_2@xxs as--1_3@sm ">
          <div className="m-card as--shape1 as--ternary">
            <div className="m-card__description">
              <h3>Product Design</h3>
              <p>I solve interface issues and improve product features </p>
            </div>
          </div>
        </div>
        <div className="g-grid__item as--1_2@xxs as--1_3@sm">
          <div className="m-card as--shape2 as--primary">
            <div className="m-card__description">
              <h3>UX_UI Design</h3>
              <p>I conduct User research, design, test, and implement</p>
            </div>
          </div>
        </div>
        <div className="g-grid__item as--1_2@xxs as--1_3@sm">
          <div className="m-card as--shape3 as--secondary">
            <div className="m-card__description">
              <h3>Front-end developement</h3>
              <p>I code User Interfaces using Html, Css and ReactJS.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Specialities
