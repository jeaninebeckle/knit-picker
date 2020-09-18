import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1 className="welcome">Welcome Back To Knit Picker!</h1>
        <h3 className="question">What would you like to do today?</h3>
            <div className="row">
              <div className="column continue">
                <Link to="/projects"><img className="img-continue" src="https://i.imgur.com/l5aKWFM.jpg" alt="knitting" /></Link>
              </div>
              <div className="column start">
                <Link to="/patterns"><img className="img-start" src="https://i.imgur.com/opvAV2S.jpg" alt="knitting" /></Link>
              </div>
            </div>
        </div>

    );
  }
}

export default Home;
