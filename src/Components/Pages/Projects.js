import React from 'react';
import Alert from "../Common/Alert";

export default function ProjectsPage() {
    return (
        <div className="page page-project">
            <div className="page-container">
                <div className="page-title">
                    <h1>Projects</h1>
                    <p>The greater the obstacle, the more glory in overcoming it.</p>
                </div>
                <Alert title="No Projects Yet" status="warning" />
            </div>
        </div>
    )
}