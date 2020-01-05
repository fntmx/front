import React from "react";
import {Link} from "react-router-dom";

export default function NavigationBar(){
    return (
        <div className="navigation">
            <nav>
                <div className="navigation-home">
                    <li><Link to="/">Bmwadforth<b>dot</b>com</Link></li>
                </div>
                <div className="navigation-links">
                    <ul>
                        <li><Link to="/articles">Articles</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/other">Other</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}