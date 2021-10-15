import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RoutesPrivate = ({ component: Component, ...rest}) => {
  const token = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={() => token
        ? <Component {...rest} />
        : <Redirect to="/login" />
      }
    />
  )
}

export default RoutesPrivate;