import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import services from './components/pages/services';
import login from './components/pages/login';
import SignUp from './components/pages/SignUp';
import ForumDiscussion from './components/Forum/admin_viewforum';
import ForumView from './components/Forum/public_viewforum';
import ProjectReviewCard from './components/projects/cards/PresentProjects';
import CenteredGrid from './components/projects/grids/PresentProjects'; 
import removeVillager from './components/villagers/remove_villager';
import RegisterVillager from './components/villagers/register_villagers';
import RegisterVoter from './components/villagers/register_voters';
import AddForum from './components/Forum/add_forum';
import AllocateFunds from './components/funds/allocate_funds';
import AddQuery from './components/queries/add_query';
import AddComplain from './components/Complains/add_complain';
import log_Navbar from './components/loggedIn_nav';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={services} />
          <Route path='/login' component={login} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/admin_viewforum' component={ForumDiscussion} />
          <Route path='/public_viewforum' component={ForumView} />
          <Route exact path="/projects/cards/PresentProjects" component = {ProjectReviewCard} />
          <Route exact path="/projects/grids/PresentProjects" component = {CenteredGrid} />
          <Route path='/remove_villager' component={removeVillager} />
          <Route path='/register_villagers' component={RegisterVillager} />
          <Route path='/register_voters' component={RegisterVoter} />
          <Route path='/add_forum' component={AddForum} />
          <Route path='/allocate_funds' component={AllocateFunds} />
          <Route path='/add_query' component={AddQuery} />
          <Route path='/add_complain' component={AddComplain} />
          <Route path='/log_navbar' component={log_Navbar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
