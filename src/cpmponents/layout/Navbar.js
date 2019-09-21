import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar bg-primary">
               <Link to="/">Home</Link>
            </div>
        )
    }
}
