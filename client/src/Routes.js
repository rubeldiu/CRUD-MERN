import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import App from './App'
import Create from './Create'
import SingleStudent from './SingleStudent'
import UpdateStudent from './UpdateStudent'

const Routes =()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/'exact component={App}/>
            <Route path='/create'exact component={Create}/>
            <Route path='/getstudent/:email'exact component={SingleStudent}/>
            <Route path='/updatestudent/:email'exact component={UpdateStudent}/>
        </Switch>
        </BrowserRouter>

    );
};
export default Routes;