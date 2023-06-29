import React from 'react'
import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <li className={["nav-item", props.active && " active"]}><Link to={props.a}><a className="nav-link text-uppercase font-weight-bold">{props.text}</a></Link></li>
  )
}

export default NavLink