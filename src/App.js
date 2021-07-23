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
import Card from './components/resourcematerial/card';
import ConstResources from './components/resourcematerial/const.materials';
import AgriResources from './components/resourcematerial/agri.materials';
import OtherResources from './components/resourcematerial/othermaterials';
import Add_Materials from './components/materials/AddMaterials';
import Supply_Materials from './components/materials/SupplyMaterials';
import Add_Materials1 from './components/materials/AddMaterials1';
import Supply_Materials1 from './components/materials/SupplyMaterials1';
import Add_Materials2 from './components/materials/AddMaterials2';
import Supply_Materials2 from './components/materials/SupplyMaterials2';
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
          <Route exact path="/materials/AddMaterials" component = {Add_Materials} />
          <Route exact path="/materials/SupplyMaterials" component = {Supply_Materials} />
          <Route exact path="/materials/AddMaterials1" component = {Add_Materials1} />
          <Route exact path="/materials/SupplyMaterials1" component = {Supply_Materials1} />
          <Route exact path="/materials/AddMaterials2" component = {Add_Materials2} />
          <Route exact path="/materials/SupplyMaterials2" component = {Supply_Materials2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
