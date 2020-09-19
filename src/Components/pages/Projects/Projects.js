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

  updateProject = (project) => {
    // const { projectId } = this.props.match.params;

    projectsData
      .updateProject(project.id, project)
      .then(() => {
        this.getProjects();
      })
      .catch((err) => console.error('edit project broke', err));
  }

  // write the function in here that takes in project object and upates firebase from projectsData --done
  // run get projects again inside then --done
  // the function gets passed as props to the project cards
  // look up how to set state from props change
  // add selected attribute to option tag for status

  render() {
    const { projects } = this.state;

    const projectCards = projects.map((project) => <ProjectCards key={project.id} project={project} updateProject={this.updateProject}/>);

    return (
      <div className="Projects">
        <h1>Projects</h1>
        <div className="card-columns">
          { projectCards }
        </div>
      </div>
    );
  }
}

export default Projects;
