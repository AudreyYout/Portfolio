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
              <li>- 1 UX_UI Designer</li>
            </ul>
          </div>
        </div>
        <div className="g-grid__item  as--1_3@xxs">
          <div className="m-detail">
            <h3>Team Role</h3>
            <ul>
              <li>- Designing UX and UI</li>
              <li>- Implementing new components in the library</li>
              <li>- Documenting the library</li>
            </ul>
          </div>
        </div>
        <div className="g-grid__item as--1_3@xxs">
          <div className="m-detail as--shape11">
            <h3>Clients</h3>
            <ul>
              <li>- Saagie Internal Development Team</li>
              <li>- Saagie Products Users</li>
              <li>- External Developers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Details
