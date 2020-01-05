import React from "react";

export default function GridContainer({children, repeat}){
    return (
        <div className="grid grid-container" style={{gridTemplateColumns: `repeat(${repeat ? repeat : 2}, 1fr`}}>
            {children}
        </div>
    )
}