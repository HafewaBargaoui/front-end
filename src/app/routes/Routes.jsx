import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";

import { ROLE_ADMIN } from "../constants/rolesConstant";
import * as URL from "../constants/urls/urlFrontEnd";
import AdminHomeView from "../views/AdminHomeView";
// import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import { PrivateRoute } from "./PrivateRoute";
import HomePageView from "../views/HomePageView";

import ProfilePrefsView from "../views/ProfilePrefsView";

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
        element={<HomePageView />}
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


      {/* <Route exact path="/create" element={<CreateRoute />} /> 

      <Route exact path="/checkcar" element={<CheckCar />} />  

      <Route exact path="/checkfilters" element={<CheckFilters />} />      

      <Route exact path="/created" element={<Created />} />
      
      <Route exact path="/historical" element={<HistoricalView />} />

      <Route exact path="/avatar" element={<AvatarView />} />

      <Route exact path="/gosearch" element={<GoSearch />} />

      <Route exact path="/homePage" element={<HomePageView />} /> */}




      <Route
        path={URL.URL_ADMIN_HOME}
        element={
          <PrivateRoute roles={[ROLE_ADMIN]}>
            <AdminHomeView />
          </PrivateRoute>
        }
      />

      <Route path={URL.URL_LOGIN} element={<LoginView />} />
      <Route path={URL.URL_REGISTER} element={<RegisterView />} />
      <Route path={URL.URL_PROFILEPREFS} element={<ProfilePrefsView />} />
    </RoutesContainer>
  );
};

export default Routes;
