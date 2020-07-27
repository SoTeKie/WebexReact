import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProfileForm from './components/ProfileForm';
import ListAll from './components/ListAll';
import DetailedView from './components/DetailedView';
import NotFound from './components/NotFound'
import Navbar from './components/Navbar';

function App(){
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/add-new'>
                    <ProfileForm />
                </Route>
                <Route exact path='/view-all'>
                    <ListAll />
                </Route>
                <Route exact path='/view/:id' children={<DetailedView />}/>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;