import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import AdminDashboard from '../screen/admin/Dashboard';
import TrafficOverview from '../screen/admin/TrafficOverview';
import DetailedActivity from '../screen/admin/DetailedActivity';


export default function MyRouter()
{

    return(
        <Router>      
            
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    // className="switch-wrapper"
                >
                    <Route exact path="/">
                        <AdminDashboard />
                    </Route>
                    <Route path="/admin/dashboard">
                        <AdminDashboard />
                    </Route>
                    <Route path="/admin/traffic">
                        <TrafficOverview />
                    </Route>
                    <Route path="/admin/activities">
                        <DetailedActivity />
                    </Route>
                </AnimatedSwitch>
            </Switch>
        </Router>
    )
}