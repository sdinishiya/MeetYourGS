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
import removeVillager from './components/villagers/remove_villager';
import RegisterVillager from './components/villagers/register_villagers';
import RegisterVoter from './components/villagers/register_voters';

import Donor from './components/tables/Donor_mgt';
import Donation from './components/tables/DonationMgt';
import Appointment from './components/tables/viewAppointment';
import People from './components/tables/viewPeople';
import Complaint from './components/tables/viewComplaint';
import Query from './components//tables/viewQuery';
import Voters from './components/tables/viewVoter';
import Finance from './components/tables/viewFinance';
import Album from './components/forms/form2';
import FreeSolo from './components/forms/viewforms';

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
          <Route path='/remove_villager' component={removeVillager} />
          <Route path='/register_villagers' component={RegisterVillager} />
          <Route path='/register_voters' component={RegisterVoter} />
          <Route path='/Dashboard/Donor_mgt' component={Donor} />
          <Route path='/Dashboard/DonationMgt' component={Donation} />
          
          <Route path='/tables/viewAppointment' component={Appointment} />
          <Route path='/tables/viewPeople' component={People} />
          <Route path='/tables/viewComplaint' component={Complaint} />
          <Route path='/tables/viewQuery' component={Query} />
          <Route path='/tables/viewVoter' component={Voters} />
          <Route path='/tables/viewFinance' component={Finance} />
          <Route path='/forms/form2' component={Album} />
          <Route path='/forms/viewforms' component={FreeSolo} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
