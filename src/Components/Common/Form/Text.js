import React from "react";
import PropTypes from "prop-types"

export default function Text({name}, props) {
    return (
        <input className="input-text" name={name} type="text" {...props} />
    );
}

Text.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};
