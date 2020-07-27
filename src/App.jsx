import React from 'react';
import {Router, Switch, Route} from 'react-router';
import history from './helpers/history';
import ProfileForm from './components/ProfileForm';
import ListAll from './components/ListAll';
import DetailedView from './components/DetailedView';

function App(){
    return(
        <Router history={history}>
            <Switch>
                <Route exact path='/add-new'>
                    <ProfileForm />
                </Route>
                <Route exact path='/view-all'>
                    <ListAll />
                </Route>
                <Route path='view/:id' children={DetailedView}/>
            </Switch>
        </Router>
    );
}

export default App;