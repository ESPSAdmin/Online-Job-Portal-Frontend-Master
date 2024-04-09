import React from 'react'
import { useAuthContext } from '../context'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequiresAuth = () => {
    const {token} = useAuthContext();
    const location = useLocation();
  return token ?  (
    <Outlet />
  ) : (
    < Navigate to='/user/login' state={{from : location}} />
  );
}

export default RequiresAuth