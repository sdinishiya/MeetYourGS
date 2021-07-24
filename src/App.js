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

import Card from './components/resourcematerial/card';
import ConstResources from './components/resourcematerial/const.materials';
import AgriResources from './components/resourcematerial/agri.materials';
import OtherResources from './components/resourcematerial/othermaterials';
import Card1 from './components/resourcematerial/card1';
import ConstResources1 from './components/resourcematerial/const.materials1';
import AgriResources1 from './components/resourcematerial/agri.materials1';
import OtherResources1 from './components/resourcematerial/othermaterials1';
import Add_Materials from './components/materials/AddMaterials';
import Supply_Materials from './components/materials/SupplyMaterials';
import Add_Materials1 from './components/materials/AddMaterials1';
import Supply_Materials1 from './components/materials/SupplyMaterials1';
import Add_Materials2 from './components/materials/AddMaterials2';
import Supply_Materials2 from './components/materials/SupplyMaterials2';


import Donor from './components/tables/Donor_mgt';
import Donation from './components/tables/DonationMgt';
import Appointment from './components/tables/viewAppointment';
import ConfirmedAppointment from './components/tables/viewConfirmedAppointment';
import People from './components/tables/viewPeople';
import Complaint from './components/tables/viewComplaint';
import Query from './components//tables/viewQuery';
import Voters from './components/tables/viewVoter';
import Finance from './components/tables/viewFinance';
import Album from './components/forms/form2';
import FreeSolo from './components/forms/viewforms';
import Appoint from './components/Appointment/appointments';
import schedule from './components/Appointment/schedule';
import Booking from './components/Appointment/bookApp';
import Booking1 from './components/Appointment/bookApp1';



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
          <Route exact path="/resourcematerial/card" component = {Card} />
          <Route exact path="/resourcematerial/const.materials" component = {ConstResources} />
          <Route exact path="/resourcematerial/agri.materials" component = {AgriResources} />
          <Route exact path="/resourcematerial/othermaterials" component = {OtherResources} />
          <Route exact path="/resourcematerial/card1" component = {Card1} />
          <Route exact path="/resourcematerial/const.materials1" component = {ConstResources1} />
          <Route exact path="/resourcematerial/agri.materials1" component = {AgriResources1} />
          <Route exact path="/resourcematerial/othermaterials1" component = {OtherResources1} />
          <Route exact path="/materials/AddMaterials" component = {Add_Materials} />
          <Route exact path="/materials/SupplyMaterials" component = {Supply_Materials} />
          <Route exact path="/materials/AddMaterials1" component = {Add_Materials1} />
          <Route exact path="/materials/SupplyMaterials1" component = {Supply_Materials1} />
          <Route exact path="/materials/AddMaterials2" component = {Add_Materials2} />
          <Route exact path="/materials/SupplyMaterials2" component = {Supply_Materials2} />

          <Route exact path="/Dashboard/Dashboard" component = {Dashboard} />
          <Route exact path="/Donations/donate2" component = {Donate2} />
          <Route path='/remove_villager' component={removeVillager} />
          <Route path='/register_villagers' component={RegisterVillager} />
          <Route path='/register_voters' component={RegisterVoter} />
          <Route path='/Dashboard/Donor_mgt' component={Donor} />
          <Route path='/Dashboard/DonationMgt' component={Donation} />
          
          <Route path='/tables/viewAppointment' component={Appointment} />
          <Route path='/tables/viewConfirmedAppointment' component={ConfirmedAppointment} />
          <Route path='/tables/viewPeople' component={People} />
          <Route path='/tables/viewComplaint' component={Complaint} />
          <Route path='/tables/viewQuery' component={Query} />
          <Route path='/tables/viewVoter' component={Voters} />
          <Route path='/tables/viewFinance' component={Finance} />
          <Route path='/forms/form2' component={Album} />
          <Route path='/forms/viewforms' component={FreeSolo} />
          
          <Route path='/Appointment/appointments' component={Appoint} />
          <Route path='/Appointment/schedule' component={schedule} />
          <Route path='/Appointment/bookApp' component={Booking} />
          <Route path='/Appointment/bookApp1' component={Booking1} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
