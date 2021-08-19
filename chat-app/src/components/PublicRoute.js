import React from 'react'
import { Redirect, Route } from 'react-router';

const PublicRoute = ({children,...routeProps}) => {
    const profile=true;
    if(profile){
        return <Redirect to ="/"/>
    }
    return (
        <div>
            <Route {...routeProps}>
                {children}
            </Route>
        </div>
    )
}

export default PublicRoute
