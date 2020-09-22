import React from 'react';
import { Link } from 'react-router-dom';
// import _ from 'underscore';
import patternsData from '../../../helpers/data/patternsData';
import projectsData from '../../../helpers/data/projectsData';
import patternShape from '../../../helpers/props/patternShape';
import ProjPatternCards from '../../shared/PatternCards/ProjPatternCards';
import ProjYarnCards from '../../shared/YarnCards/ProjYarnCards';
import ProjNeedleCards from '../../shared/NeedleCards/ProjNeedleCards';
import needleShape from '../../../helpers/props/needleShape';
import yarnShape from '../../../helpers/props/yarnShape';
import needlesData from '../../../helpers/data/needlesData';
import yarnsData from '../../../helpers/data/yarnsData';
import authData from '../../../helpers/data/authData';
import './CreateProject.scss';

class CreateProject extends React.Component {
  static propTypes = {
    pattern: patternShape.patternShape,
    needle: needleShape.needleShape,
    yarn: yarnShape.yarnShape,
  }

  state = {
    pattern: {},
    needles: [],
    yarns: [],
  }

  getPattern = () => {
    const { patternId } = this.props.match.params;
    patternsData.getSinglePatterns(patternId)
      .then((res) => this.setState({ pattern: res.data }))
      .catch((err) => console.error('get pattern failed', err));
  }

  getNeedles = () => {
    needlesData.getNeedlesByUid(authData.getUid())
      .then((needles) => this.setState({ needles }))
      .catch((err) => console.error('get needles broke', err));
  }

  getYarns = () => {
    yarnsData.getYarnsByUid(authData.getUid())
      .then((yarns) => this.setState({ yarns }))
      .catch((err) => console.error('get yarns broke', err));
  }

  componentDidMount() {
    this.getPattern();
    this.getNeedles();
    this.getYarns();
  }

  saveProject = (e) => {
    e.preventDefault();

    const newProject = {
      patternId: this.props.match.params.patternId,
      status: 'In Progress',
      uid: authData.getUid(),
    };

    projectsData.createProject(newProject)
      .then(() => {
        this.props.history.push('/projects');
      })
      .catch((err) => console.error('new project not happening', err));
  }

  render() {
    const { needles, yarns, pattern } = this.state;

    const needleCards = needles.map((needle) => <ProjNeedleCards key={needle.id} needle={needle} />);
    const yarnCards = yarns.map((yarn) => <ProjYarnCards key={yarn.id} yarn={yarn} />);

    return (
      <div className="CreateProject">
        <h1>Start A New Project</h1>
        <h2 className="ready">Do you have everything you need?</h2>
        <div className="row">
        <div className="pattern col-md">
          <h3>Pattern</h3>
        <ProjPatternCards pattern={pattern} />
        </div>
        <div className="buttons col-md">
        <h3>Links</h3>
          <button className="btn btn-secondary" onClick={this.saveProject}>Ready to Go!</button>
          <a className="btn btn-secondary" href="https://www.amazon.com" target="blank"><i className="fab fa-amazon"></i> Buy Supplies</a>
          <Link to={'/patterns'} className="btn btn-secondary">Return to Patterns</Link>
        </div>
        <div className="yarn col-md">
        <h3>Yarn</h3>
          { yarnCards }
        </div>
        <div className="needles col-md">
        <h3>Needles</h3>
          { needleCards }
        </div>
        </div>
      </div>
    );
  }
}

export default CreateProject;
