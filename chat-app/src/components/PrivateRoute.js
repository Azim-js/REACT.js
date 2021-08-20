import React from 'react'
import { Redirect, Route } from 'react-router'
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({children, ...routeProps}) => {
    // eslint-disable-next-line
    console.log({...routeProps})
    const profile=useProfile();
    if(!profile){
        return <Redirect to ="/signin"/>
    }
    return (
        <div>
            <Route {...routeProps}>
                {children}
            </Route>
        </div>
    )
}

export default PrivateRoute
