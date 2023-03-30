import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";

import * as URL from "../constants/urls/urlFrontEnd";

import LoginView from "../views/LoginView";
import ProfilView from "../views/ProfilView";
import FaqView from "../views/FaqView";
import ContactView from "../views/ContactView";

import RegisterView from "../views/RegisterView";
import HomePageView from "../views/HomePageView";
import ForgetLoginView from "../views/ForgetLoginView";
import ResetPassword from "../views/ResetPasswordView";

import DeleteAccountView from "../views/DeleteAccountView";

import ProfilePrefsView from "../views/ProfilePrefsView";
import TrajetsView from "../views/TrajetsView";
import CarteView from "../views/CarteView";

import ChatSocket from "../views/chat";

import SubmittedRegister from "../components/stepsRegister/SubmittedRegister";
import MailVerified from "../components/account/MailVerified";
import PasswordModified from "../components/account/PasswordModified";
import ResetPasswordMailSent from "../components/account/ResetPasswordMailSent";
import DeleteAccountModal from "../components/modals/DeleteAccountModal";

import SearchTrajetView from "../views/SearchTrajetView";
import TrajetCreateView from "../views/TrajetCreateView";

import CoinsView from '../views/CoinsView';
import BuyCoins from '../components/buddyCoins/BuyCoins';
import BuyCoinsStripe from '../components/buddyCoins/BuyCoinsStripe';
import SellCoins from '../components/buddyCoins/SellCoins';
import HistCoins from '../components/buddyCoins/HistCoins';
import TrajetValide from "../components/carte/TrajetValide";
import ValidatedSearch from "../components/stepsSearchTrajet/ValidatedSearch";

import ConfirmationPaiement from "../views/ConfirmationPaiementView";
import VosTrajetsView from "../views/VosTrajetsView";

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
      <Route path={URL.URL_PROFIL} element={<ProfilView />} />
      <Route path={URL.URL_FAQ} element={<FaqView />} />
      <Route path={URL.URL_CONTACT} element={<ContactView />} />
      <Route path={URL.URL_DELETE_ACCOUNT} element={<DeleteAccountView />} />

      <Route path={URL.URL_LOGIN} element={<LoginView />} />
      <Route path={URL.URL_FORGET_LOGIN} element={<ForgetLoginView />} />
      <Route path={URL.URL_RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={URL.URL_PASSWORD_MODIFIED} element={<PasswordModified />} />
      <Route
        path={URL.URL_RESET_PASSWORD_MAIL_SENT}
        element={<ResetPasswordMailSent />}
      />
     
      <Route path={URL.URL_REGISTER} element={<RegisterView />} />
      <Route path={URL.URL_REGISTER_LAST} element={<SubmittedRegister />} />
      <Route path={URL.URL_MAIL_VERIFIED} element={<MailVerified />} />
      <Route path={URL.URL_PROFILEPREFS} element={<ProfilePrefsView />} />
      <Route path={URL.URL_TRAJETS} element={<TrajetsView />} />
      <Route path={URL.URL_CARTE} element={<CarteView />} />
      <Route path={URL.URL_CHAT_SOCKET} element={<ChatSocket />} />
      <Route path={URL.URL_SEARCH} element={<SearchTrajetView />} />
      <Route path={URL.URL_TRAJET_CREATE} element={<TrajetCreateView />} />
      <Route path={URL.URL_TRAJET_VALIDE} element={<TrajetValide />} />
      <Route path={URL.URL_TRAJET_SEARCH_VALIDE} element={<ValidatedSearch />} />
      <Route
        path={URL.URL_DELETE_ACCOUNT_MODAL}
        element={<DeleteAccountModal />}
      />
      <Route path={URL.URL_COINS} element={<CoinsView />} />
      <Route path={URL.URL_BUYCOINS} element={<BuyCoins />} />
      <Route path={URL.URL_SELLCOINS} element={<SellCoins />} />
      <Route path={URL.URL_HISTCOINS} element={<HistCoins />} />
      <Route path={URL.URL_BUYCOINS_STRIPE} element={<BuyCoinsStripe />} />

      <Route path={URL.URL_PAIEMENT_VALIDE} element={<ConfirmationPaiement />} />
      <Route path={URL.URL_VOS_TRAJETS} element={<VosTrajetsView />} />

    </RoutesContainer>
  );
};

export default Routes;
