import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome Back To Knit Picker!</h1>
        <h3>What would you like to do today?</h3>
            <div className="row">
              <div className="column continue">
                <Link to="/projects"><img className="img-continue" src="https://bit.ly/3iC0j0X" alt="knitting" /></Link>
                <h1>Continue A Project</h1>
              </div>
              <div className="column start">
                <Link to="/patterns"><img className="img-start" src="https://bit.ly/2RutTtv" alt="knitting" /></Link>
                <h1>Browse Patterns And <br></br> Start A New Project</h1>
              </div>
            </div>
        </div>

    );
  }
}

export default Home;
