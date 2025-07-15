import React from 'react'
import { Link } from "react-router-dom";

function NavLink(props: any) {
  return (
    <div className={`nav-item ${props.active ? "active" : ""}`}><Link to={props.a}><a className="!text-[#E85099] nav-link text-uppercase font-weight-bold text-xl">{props.text}</a></Link></div>
  )
}

export default NavLink