import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import Tags from '../Common/Display/Tags';
import Alert from '../Common/Display/Alert';
import { PROJECTS } from '../../GraphQL/Query/Projects';

function ProjectGrid({ title, description, tags, created }) {
  return (
    <div className="article grid-item">
      <div className="grid-item-title">
        <h2>{title}</h2>
        <p>{description}</p>
        <Tags tags={tags} />
      </div>
      <div className="grid-item-footer">
        <sub>{moment(created).format('DD MMM, YYYY')}</sub>
      </div>
    </div>
  );
}

export default function ProjectsGrid() {
  const { loading, error, data } = useQuery(PROJECTS, { errorPolicy: 'all' });

  if (loading || data === undefined) return null;
  if (error)
    return (
      <Alert title="Error" subtitle="An Error Occurred Fetching Projects :(" status="danger" />
    );

  return (
    <>
      {data.projects.length === 0 && (
        <Alert title="Info" subtitle="No Records Found" status="info" />
      )}
      <div className="projects-grid grid">
        {data.projects.map(project => {
          return (
            <a href={project.github} key={project.id} target="_blank">
              <ProjectGrid
                title={project.title}
                description={project.description}
                tags={project.tags}
                created={project.created}
              />
            </a>
          );
        })}
      </div>
    </>
  );
}
