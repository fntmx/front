import React from "react";
import {Link} from "react-router-dom";
import {CLIENT_ROUTES} from "../Routes";

function NavigationItem({title, link}) {
    return (
        <div className="navigation-item">
            <Link to={link}>{title}</Link>
        </div>
    )
}

export default function Navigation(){
    return (
        <header className="navigation">
            <nav>
                <div className="navigation-left">
                    <NavigationItem title="Articles" link={CLIENT_ROUTES.ARTICLES} />
                    <NavigationItem title="Projects" link={CLIENT_ROUTES.PROJECTS} />
                </div>
            </nav>
        </header>
    )
}