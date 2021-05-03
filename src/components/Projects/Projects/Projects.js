import React from 'react';
import ProjectData from '../../../FakeData/ProjectData';
import Navbar from '../../Shared/Navbar/Navbar';
import SingleProject from '../SingleProject/SingleProject';

const Projects = () => {
    return (
        <div className="project-header">
            <Navbar></Navbar>
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

export default Projects;