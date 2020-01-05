import React from "react";
import {Check, Info, Warning, Error} from "@material-ui/icons";

export default function Alert({title, subtitle, status, children}) {

    function loadIcon(){
        switch (status) {
            case "success":
                return <Check/>;
            case "warning":
                return <Warning/>;
            case "danger":
                return <Error/>;
            default:
                return <Info/>
        }
    }

    return (
        <div className={`alert alert-${status}`}>
            <div className="alert-title">
                <span className="icon">{loadIcon()}</span>
                <span>{title}</span>
            </div>
            {subtitle && <sub>{subtitle}</sub>}
            {children && <div className="alert-content">
                {children}
            </div>}
        </div>
    )
}