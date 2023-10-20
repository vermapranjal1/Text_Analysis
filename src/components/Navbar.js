import React from 'react'

export default function Navbar(props) {
  return (
  <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" 
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.aboutText}</a>
      </li>
    </ul>
    <div className={`custom-control custom-switch text-${props.Mode==="light"?"dark":"light"}`}>
  <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.ToggleMode}/>
  <label className="custom-control-label" htmlFor="customSwitch1">Enable DarkMode</label>
</div>
  </div>
</nav>
    </div>
  )
}
// class=className
//for=htmlFor
