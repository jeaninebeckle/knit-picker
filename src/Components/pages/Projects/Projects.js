import React from 'react';
import authData from '../../../helpers/data/authData';
import projectsData from '../../../helpers/data/projectsData';
import ProjectCards from '../../shared/ProjectCards/ProjectCards';

class Projects extends React.Component {
  state = {
    projects: [],
  }

  getProjects = () => {
    projectsData.getProjectsByUid(authData.getUid())
      .then((projects) => this.setState({ projects }))
      .catch((err) => console.error('get projects broke', err));
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    const { projects } = this.state;

    const projectCards = projects.map((project) => <ProjectCards key={project.id} project={project} />);

    return (
      <div className="Projects">
        <h1>Projects</h1>
        <div className="card-columns m-3">
          { projectCards }
        </div>
      </div>
    );
  }
}

export default Projects;
