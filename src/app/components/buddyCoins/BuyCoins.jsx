import React from 'react';

export default function Contact() {
    return (
        <div className='h-full flex justify-center items-center  bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
            <div className=' text-white '>

                <div className='text-md'>
                    <p>acheter coins</p>
                    <p>les utilisateurs qui ont mis en vente des coins apparaissent ici et l'utilisateur choisit la personne a qui il veut acheter des coins</p>

                </div>
            </div>
        </div>
    )
}


// import React from "react";
// import { useState } from "react";

// const BuyCoins = () => {
//     const [users, setusers] = useState([]);
//     const [photo, setphoto] = useState([]);
//     const isAuthenticated = useSelector(selectIsLogged);
//     const user = useSelector(selectUser);

//     const userCoins = [
//         {
//             id: 1,
//             date: "01/03/2022",
//             conducteur: "henry",
//             photo: paul,
//             coin: buddycoin,
//         },
//         {
//             id: 2,
//             date: "01/03/2022",
//             conducteur: "marta",
//             photo: paul,
//             coin: buddycoin,
//         },
//     ];

//     return (

//         <div className="flex grow place-content-center w-screen md:w-96 max-w-xl space-y-6 rounded-lg pb-8  px-8 shadow lg:px-8  bg-cover bg-slate-500 bg-opacity-50">
//             <div className="grid place-content-center">
//                 <div className="flex flex-col text-black text-lg">
//                     <div className="grid place-items-center m-4 text-black">
                       
//                             <img
//                                 className="w-16 rounded-full border-2 border-green-500"
//                                 src={photo}
//                             />
                        
                    
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };
// export default BuyCoins;