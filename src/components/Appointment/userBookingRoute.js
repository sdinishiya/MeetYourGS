import React from 'react';
import { Route, Switch } from "react-router-dom";
import AddBooking from './addBooking'

const UserBookingRoute=()=>{
    return(
        <div>
            <Switch>
                <Route path="/userBookingRoute/:appointID">
                    <AddBooking/>

                </Route>
            </Switch>
        </div>
    )
}

export default UserBookingRoute;
