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
import FreeSolo from './components/forms/viewforms'; 
import Album from './components/forms/form2'; 


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
          <Route exact path="/forms/viewforms" component = {FreeSolo} />
          <Route exact path="/forms/form2" component = {Album} />
         


        </Switch>
      </Router>
    </>
  );
}

export default App;
