import React from "react";
import {Link} from "react-router-dom";
import {CLIENT_ROUTES} from "../Routes";

export default function NavigationBar(){
    return (
        <div className="navigation">
            <nav>
                <div className="navigation-home">
                    <li><Link to="/">Bmwadforth<b>dot</b>com</Link></li>
                </div>
                <div className="navigation-links">
                    <ul>
                        <li><Link to={CLIENT_ROUTES.ARTICLES}>Articles</Link></li>
                        <li><Link to={CLIENT_ROUTES.PROJECTS}>Projects</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}