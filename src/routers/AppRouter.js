import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvenScreen } from '../components/marvel/MarvenScreen';
import { Navbar } from '../components/ui/Nabar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/login" component={LoginScreen}></Route>
                    <Route exact path="/" component={MarvenScreen}></Route>
                    <Route exact path="/marvel" component={MarvenScreen}></Route>
                    <Route exact path="/dc" component={DcScreen}></Route>
                </Switch>
            </div>
        </Router>
    )
}
