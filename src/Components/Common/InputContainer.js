import React from "react";

export default function InputContainer({error, children}) {
    return (
        <div className="input input-container">
            {children}
            {error && <div className="error input-error">
                {error}
            </div>}
        </div>
    )
}