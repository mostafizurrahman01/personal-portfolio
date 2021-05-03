import React from 'react';
import ProjectData from '../../../FakeData/ProjectData';
import SingleProject from '../../Projects/SingleProject/SingleProject';
import './ProjectSection.css';


const ProjectSection = () => {
    return (
        <div className="project-header mt-5">
            <div className="project-body">
                <h1 className="text-center text-primary mt-3">My Recent Project</h1>
            </div>
            <div className="project-bodyMain">
                {
                    ProjectData.map(project => <SingleProject project={project} key={project.id}></SingleProject>)
                }
            </div>

        </div>
    );
};

export default ProjectSection;