import React, {useState} from 'react';
import GridContainer from "../../Common/Grid/GridContainer";
import ArticlesTable from "../../Admin/ArticlesTable";
import Alert from "../../Common/Alert";

export default function AuthenticatedAdminPage() {

    return (
        <div className="page page-admin">
            <div className="page-container">
                <div className="page-title">
                    <h1>Admin Panel</h1>
                    <p>With great power comes great responsibility.</p>
                </div>

                <GridContainer repeat={1}>
                    <div>
                        <h2>Articles</h2>
                        <ArticlesTable/>
                    </div>
                    <div>
                        <h2>Projects</h2>
                        <Alert title="Coming Soon" status="warning" />
                    </div>
                    <div>
                        <h2>Users</h2>
                        <Alert title="Coming Soon" status="warning" />
                    </div>
                    <div>
                        <h2>Statistics</h2>
                        <Alert title="Coming Soon" status="warning" />
                    </div>
                </GridContainer>
            </div>
        </div>
    )
}