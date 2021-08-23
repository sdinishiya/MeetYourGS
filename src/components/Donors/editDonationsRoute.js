import React from 'react';
import { Route, Switch } from "react-router-dom";
import UpdateDonation from './updateDonation'

const EditDonationRoute=()=>{
    return(
        <div>
            <Switch>
                <Route path="/editDonationsRoute/:donorID">
                    <UpdateDonation/>

                </Route>
            </Switch>
        </div>
    )
}

export default EditDonationRoute;
