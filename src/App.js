import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/services';
import login from './components/pages/login';
import SignUp from './components/pages/SignUp';
import ForumDiscussion from './components/Forum/admin_viewforum';
import ForumView from './components/Forum/public_viewforum';
import ProjectReviewCard from './components/projects/cards/PresentProjects';
import CenteredGrid from './components/projects/grids/PresentProjects'; 
import Dashboard from './components/Dashboard/Dashboard'; 
import Donate2 from './components/Donations/donate2'; 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/login' component={login} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/admin_viewforum' component={ForumDiscussion} />
          <Route path='/public_viewforum' component={ForumView} />
          <Route exact path="/projects/cards/PresentProjects" component = {ProjectReviewCard} />
          <Route exact path="/projects/grids/PresentProjects" component = {CenteredGrid} />
          <Route exact path="/Dashboard/Dashboard" component = {Dashboard} />
          <Route exact path="/Donations/donate2" component = {Donate2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
