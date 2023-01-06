import apiBackEnd from './api.Backend';
import { URL_BACK_REGISTER } from '../../constants/urls/urlBackEnd';

// axios pour l'envoie du formulaire d'enregistrement de l'utilisateur
export function register() {
    return apiBackEnd.post(URL_BACK_REGISTER);
}