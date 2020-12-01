import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Topbar = ({ children }) => {

  function slideUp() {
    var menu = document.getElementById('menu');
    menu.style.transition = "all 1s  ease-in-out";
    menu.style.margin= "margin: -600px 0 0 0;";
  }

  function loadScript() {
    var menu = document.getElementById('menu');
    var closeIcon = document.getElementById('menu__toggle');
    menu.addEventListener('click', handleMenuClick);
    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        closeIcon.checked = false;
        slideUp();
      }
    }
  };

  return (
    <div className="l-topbar">
      <div className="l-page-wrapper">
        <div className="g-grid as--stretch as--no-wrap">
          <div className="g-grid__item as--middle">
              <Link className="as--light l-topbar__Logo" to="/">
                <span className="logo"></span>
                <h3>Yout.design</h3>
              </Link>
          </div>
          <div className="g-grid__item as--push">
            <nav className="l-topbar__mobile">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>
              <ul className="menu__box" id='menu'>
                <li>
                  <Link className="menu__item as--light" to="/" onClick= {loadScript}>Home</Link>
                </li>
                <li>
                  <Link className="menu__item as--light" to="/#about" onClick= {loadScript}>About</Link>
                </li>
                <li>
                  <Link className="menu__item as--light" to="/#works" onClick= {loadScript}>Works</Link>
                </li>
              </ul>
            </nav>
            <nav className="l-topbar__desktop">
              <div className="l-topbar__desktop__menu">
                <div className="l-topbar__desktop__menu__item"><Link className="as--light" to="/#about">About</Link></div>
                <div className="l-topbar__desktop__menu__item"><Link className="as--light" to="/#works">Works</Link></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}



Topbar.propTypes = {
  siteTitle: PropTypes.string,
}

Topbar.defaultProps = {
  siteTitle: ``,
}

export default Topbar