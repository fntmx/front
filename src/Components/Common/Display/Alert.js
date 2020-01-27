import React from "react";
import PropTypes from "prop-types"
import { ReactComponent as SuccessIcon } from "../../../Assets/Icons/success.svg";
import { ReactComponent as WarningIcon } from "../../../Assets/Icons/warning.svg";
import { ReactComponent as ErrorIcon } from "../../../Assets/Icons/error.svg";

export default function Alert({title, subtitle, status, children}) {
    function getIcon(){
        switch (status) {
            case "success":
                return <SuccessIcon/>;
            case "warning":
                return <WarningIcon/>;
            case "danger":
                return <ErrorIcon/>;
            default:
                return <WarningIcon/>;
        }
    }

    return (
        <div className={`alert alert-${status}`}>
            <div className="alert-title">
                <div className="alert-title-heading">
                    <span className="heading-icon">{getIcon()}</span>
                    <span className="heading-title">{title}</span>
                </div>
                {subtitle && <sub className="alert-title-subheading">{subtitle}</sub>}
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
