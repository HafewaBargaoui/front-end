import React, {useState} from 'react';
import { deleteAccount } from '../../api/backend/account';
import { Link } from "react-router-dom";
import DeleteAccountModal from '../modals/DeleteAccountModal';

import {
    URL_HOME,

} from "../../constants/urls/urlFrontEnd";
import { useDispatch } from "react-redux";
import { logout } from "../../api/backend/account";
import { signOut } from "../../redux-store/authenticationSlice";


const DeleteAccount = () => {
    const dispatch = useDispatch();

    const logOut = (values) => {
        logout(values)
          .then((res) => {
    
            dispatch(signOut(res.data));
            navigate(URL_HOME);
          })
      };

    const [click, setclick] = useState(false)
    const deleteUser = async (req, res) => {
        deleteAccount();
        logOut();
    };

    const clicked = () => {
        setclick(!click)
    }

    return (
        <div className="w-full max-w-xl space-y-3 rounded-lg pb-8 px-6 shadow lg:px-8 bg-cover bg-slate-500">
            <div className='my-8'>
                <h5 className=''>Voulez-vous vraiment supprimer votre compte ?</h5>
                <div className='flex justify-around text-xl'>
                    <div onClick={clicked} className='mt-10 backdrop-brightness-125 px-4 py-2 rounded-md hover:backdrop-brightness-150'>
                        <button onClick={deleteUser}>
                            OUI
                        </button>
                    </div>
                    <div className='mt-10 backdrop-brightness-125 px-4 py-2 rounded-md hover:backdrop-brightness-150'>
                        <Link to={URL_HOME}>
                            <button>
                                NON
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
            {click && <DeleteAccountModal/>}
        </div>

    )
};

export default DeleteAccount;
