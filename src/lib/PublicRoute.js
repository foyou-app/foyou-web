import React from "react";
import { Route, Navigate } from "react-router-dom";
const PublicRoute = ({
   isAuthenticated,
   component: Component,
   ...restProps
}) => (
   <Route
       {...restProps}
       component={(props) =>
          isAuthenticated 
          ? <Navigate replace to="/" />
          :  <Component {...props} />
       }
   />
);
export default PublicRoute;