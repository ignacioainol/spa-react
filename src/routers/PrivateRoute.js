import React from 'react'
import PropTypes from 'prop-types'

import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    console.log(rest);
    localStorage.setItem('lastPath', rest.location.pathname + rest.location.search);

    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}