import React from 'react';
import Alert from '../Common/Display/Alert';

export default function ProjectsPage() {
  return (
    <div className="page page-projects">
      <h1>Projects</h1>
      <Alert title="No Projects" subtitle="No projects found, check back later!" status="warning" />
    </div>
  );
}
