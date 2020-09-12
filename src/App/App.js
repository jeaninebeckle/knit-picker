import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../helpers/data/connection';
import Auth from '../Components/pages/Auth/Auth';
import MyNavbar from '../Components/MyNavbar/MyNavbar';
import Home from '../Components/pages/Home/Home';
import Inventory from '../Components/pages/Inventory/Inventory';
import NewNeedle from '../Components/pages/NewInventory/NewNeedle';
import EditNeedle from '../Components/pages/EditInventory/EditNeedle';
import NewYarn from '../Components/pages/NewInventory/NewYarn';
import EditYarn from '../Components/pages/EditInventory/EditYarn';
import Gallery from '../Components/pages/Gallery/Gallery';
import Patterns from '../Components/pages/Patterns/Patterns';
import Projects from '../Components/pages/Projects/Projects';
import SingleProject from '../Components/pages/SingleProject/SingleProject';

import './App.scss';

connection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
      <BrowserRouter>
         <React.Fragment>
           <MyNavbar authed={authed}/>
           <div className="container">
             <Switch>
               <PrivateRoute path="/home" component={Home} authed={authed}/>
               <PrivateRoute path="/new/needle" component={NewNeedle} authed={authed}/>
               <PrivateRoute path="/new/yarn" component={NewYarn} authed={authed}/>
               <PrivateRoute path="/inventory" component={Inventory} authed={authed} />
               <PrivateRoute path="/projects" component={Projects} authed={authed} />
               <PrivateRoute path="/gallery" component={Gallery} authed={authed} />
               <PrivateRoute path="/patterns" component={Patterns} authed={authed} />
               <PrivateRoute path="/edit/:needleId" component={EditNeedle} authed={authed} />
               <PrivateRoute path="/edit/:yarnId" component={EditYarn} authed={authed} />
               <PrivateRoute path="/projects/:projectId" component={SingleProject} authed={authed} />
               <PublicRoute path="/auth" component={Auth} authed={authed} />
               <Redirect from="*" to="/home"/>
             </Switch>
           </div>
         </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
