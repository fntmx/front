import React from "react";
import PropTypes from "prop-types"

export default function InputShell({id, label, subLabel, error, children}) {
    return (
        <div className={`input-shell shell-${id}`}>
            {label && <label>{label}</label>}
            {children}
            {subLabel && <sub>{subLabel}</sub>}
            {error && <p>{error}</p>}
        </div>
    );
}

InputShell.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
};
