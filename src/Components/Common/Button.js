import React from "react";

export default function Button({title, status, onClick}) {
    return (
        <div className={`button button-${status}`} onClick={onClick}>
            {title}
        </div>
    )
}