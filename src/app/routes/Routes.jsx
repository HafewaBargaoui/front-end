import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";

import { ROLE_ADMIN } from "../constants/rolesConstant";
import * as URL from "../constants/urls/urlFrontEnd";
import AdminHomeView from "../views/AdminHomeView";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import CreateRoute from "../views/CreateRoute";
import CheckCar from "../views/CheckCar";
import CheckFilters from "../views/CheckFilters";
import Created from "../views/Created";
import HistoricalView from "../views/HistoricalView";

import { PrivateRoute } from "./PrivateRoute";

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
  return (
    <RoutesContainer>
      <Route
        path={URL.URL_HOME}
        element={
          <PrivateRoute>
            <HomeView />
          </PrivateRoute>
        }
      />

      {/* <Route
        path={URL.URL_CREATE}
        element={
          <PrivateRoute>
            <CreateView />
          </PrivateRoute>
        }
      /> */}

      {/* <Route
        path={URL.URL_HISTORICAL}
        element={
          <PrivateRoute>
            <HistoricalView />
          </PrivateRoute>
        }
      /> */}
      {/* <Route exact path="/login" element={<LoginView />} /> */}


      <Route exact path="/create" element={<CreateRoute />} /> 

      <Route exact path="/checkcar" element={<CheckCar />} />  

      <Route exact path="/checkfilters" element={<CheckFilters />} />      

      <Route exact path="/created" element={<Created />} />
      
      <Route exact path="/historical" element={<HistoricalView />} />


      <Route
        path={URL.URL_ADMIN_HOME}
        element={
          <PrivateRoute roles={[ROLE_ADMIN]}>
            <AdminHomeView />
          </PrivateRoute>
        }
      />

      <Route path={URL.URL_LOGIN} element={<LoginView />} />

    </RoutesContainer>
  );
};

export default Routes;
