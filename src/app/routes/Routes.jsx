import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";

import { ROLE_ADMIN } from "../constants/rolesConstant";
import * as URL from "../constants/urls/urlFrontEnd";
import AdminHomeView from "../views/AdminHomeView";
// import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import AvatarView from "../views/AvatarView";
import ProfilView from "../views/ProfilView";
import FaqView from "../views/FaqView";
import ContactView from "../views/ContactView";

import RegisterView from "../views/RegisterView";
import { PrivateRoute } from "./PrivateRoute";
import HomePageView from "../views/HomePageView";
import ForgetLoginView from "../views/ForgetLoginView";
import ResetPassword from "../views/ResetPasswordView";
import ForgetEmailView from "../views/ForgetEmailView";
import DeleteAccountView from "../views/DeleteAccountView";

import ProfilePrefsView from "../views/ProfilePrefsView";
import TrajetsView from "../views/TrajetsView";
import CarteView from "../views/CarteView";
import SubmittedRegister from "../components/stepsRegister/SubmittedRegister";
import MailVerified from "../components/account/MailVerified";
import PasswordModified from "../components/account/PasswordModified";
import DeleteAccountModal from "../components/modals/DeleteAccountModal";

import SearchTrajetView from "../views/SearchTrajetView";

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
  return (
    <RoutesContainer>
      <Route path={URL.URL_HOME} element={<HomePageView />} />

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
      <Route path={URL.URL_PROFIL} element={<ProfilView />} />
      <Route path={URL.URL_FAQ} element={<FaqView />} />
      <Route path={URL.URL_CONTACT} element={<ContactView />} />
      <Route path={URL.URL_DELETE_ACCOUNT} element={<DeleteAccountView />} />

      <Route path={URL.URL_LOGIN} element={<LoginView />} />
      <Route path={URL.URL_FORGET_LOGIN} element={<ForgetLoginView />} />
      <Route path={URL.URL_RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={URL.URL_PASSWORD_MODIFIED} element={<PasswordModified />} />
      <Route path={URL.URL_FORGET_EMAIL} element={<ForgetEmailView />} />
      <Route path={URL.URL_REGISTER} element={<RegisterView />} />
      <Route path={URL.URL_REGISTER_LAST} element={<SubmittedRegister />} />
      <Route path={URL.URL_MAIL_VERIFIED} element={<MailVerified />} />
      <Route path={URL.URL_PROFILEPREFS} element={<ProfilePrefsView />} />
      <Route path={URL.URL_TRAJETS} element={<TrajetsView />} />
      <Route path={URL.URL_AVATAR} element={<AvatarView />} />
      <Route path={URL.URL_CARTE} element={<CarteView />} />
      <Route path={URL.URL_SEARCH} element={<SearchTrajetView />} />
      <Route
        path={URL.URL_DELETE_ACCOUNT_MODAL}
        element={<DeleteAccountModal />}
      />
    </RoutesContainer>
  );
};

export default Routes;
