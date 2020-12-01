import React from "react"

const Details = () => (
  <div className="l-section as--sm as--dark ">
    <div className="l-page-wrapper">
      <div className="g-grid as--gutter-xs@xxs as--gutter-sm@xs as--stretch ">
        <div className="g-grid__item  as--1_3@xxs ">
          <div className="m-detail as--shape10">
            <h3>Contributors</h3>
            <ul>
              <li>- 1 Lead Designer</li>
              <li>- 1 Product Designer</li>
              <li>- 2 Front-End Developers</li>
            </ul>
          </div>
        </div>
        <div className="g-grid__item  as--1_3@xxs">
          <div className="m-detail">
            <h3>Team Role</h3>
            <ul>
              <li>- Design new components</li>
              <li>- Implement component in library</li>
              <li>- Documentation</li>
            </ul>
          </div>
        </div>
        <div className="g-grid__item as--1_3@xxs">
          <div className="m-detail as--shape11">
            <h3>Clients</h3>
            <ul>
              <li>- Internal dev team</li>
              <li>- App users</li>
              <li>- External developers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Details
