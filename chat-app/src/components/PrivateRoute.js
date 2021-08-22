import React from 'react'
import { Redirect, Route } from 'react-router'
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({children, ...routeProps}) => {
    // eslint-disable-next-line
    console.log({...routeProps})
    const {profile,isLoading}=useProfile();

    if(isLoading && !profile){
        return <Container>
            <Loader center vertical size="md" content="Loading" speed="slow"/>
        </Container>
    }

    if(!profile && !isLoading){
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
