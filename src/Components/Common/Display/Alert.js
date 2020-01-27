import React from "react";
import PropTypes from "prop-types"

export default function Alert({title, subtitle, status, children}) {
    function getIcon(){
        switch (status) {
            case "success":
                return;
            case "warning":
                return;
            case "danger":
                return;
            default:
                return
        }
    }

    return (
        <div className={`alert alert-${status}`}>
            <div className="alert-title">
                <span>{getIcon()}</span>
                <span>{title}</span>
                {subtitle && <sub>{subtitle}</sub>}
            </div>
            {children && <div className="alert-content">
                {children}
            </div>}
        </div>
    );
}

Alert.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    status: PropTypes.oneOf(["success", "warning", "danger", "default"]),
};
