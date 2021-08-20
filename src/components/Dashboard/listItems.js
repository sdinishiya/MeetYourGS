import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';


export const mainListItems = (
  <div>
      <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
        <Link to='/tables/viewPeople' className='nav-link1'>
      <ListItemText primary="People Management" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to='/Appointment/appointments' className='nav-link1'>
      <ListItemText primary="Appointments" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to='/tables/viewFinance' className='nav-link1'>
      <ListItemText primary="Finance" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to='/Donors/donationdash' className='nav-link1'>
      <ListItemText primary="Donor & Donations" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to='/forms' className='nav-link1'>
      <ListItemText primary="Official Forms" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to='/projects' className='nav-link1'>
      <ListItemText primary="Projects" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <BarChartIcon />
      </ListItemIcon>
      <Link to='/support' className='nav-link1'>
      <ListItemText primary="Business Support" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to='/resourcematerial/card' className='nav-link1'>
      <ListItemText primary="Resource & Materials" />
      </Link>
    </ListItem>
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Information Handling</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to='/admin_viewforum' className='nav-link1'>
      <ListItemText primary="Forum Discussion" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to='/tables/viewQuery' className='nav-link1'>
      <ListItemText primary="Query Details" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to='/tables/viewComplaint' className='nav-link1'>
      <ListItemText primary="Complaint Handling" />
      </Link>
    </ListItem>
    
  </div>
);