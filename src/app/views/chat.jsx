import React, { useEffect, useState } from "react"
import { selectToken, selectUser } from "../redux-store/authenticationSlice";
import { useSelector } from 'react-redux';
import url from '../api/backend/socket_url';
import io from "socket.io-client";
import { getMessageSocket } from "../api/backend/account";

var socket;

const chatSocket = () => {

    const user = useSelector(selectUser);

    const [name] = useState(user.username);
    const [roomId, setRoomId] = useState();
    const [roomFindId, setRoomFindId] = useState();
    const [message, setMessage] = useState('');
    const [messageReceived, setMessageReceived] = useState([]);
    const [nameReceived, setNameReceived] = useState([]);
    const [history, setHistory] = useState([]);
    const [roomSelected, setRoomSelected] = useState([]);
    const token = useSelector(selectToken);


    useEffect(async () => {
        const response = await getMessageSocket();
        setHistory(response.data)
        setRoomSelected(response.data);
        console.log(response.data);
    }, [setHistory, setRoomSelected]);

    useEffect(async () => {
        socket = io(url, {
            query: { token: token }
        });

        socket.on('messagePriveReçu', (name, message) => {
            setNameReceived(prevNameReceived => [...prevNameReceived, name]);
            setMessageReceived(prevMessageReceived => [...prevMessageReceived, message])
        });

        return () => {
            socket.disconnect();
        }
    }, []);

    const sendMessage = () => {
        if (roomId === "") {
            socket.emit('messageEnvoye', message)
        }
        else {
            socket.emit('messagePriveEnvoye', { roomFindId, message, roomId, name })
            setMessage('');
        }
    };

    const joinRoomId = async (index) => {
        console.log(roomSelected[index].user);
        socket.emit('salle rejoint', roomSelected[index].room[0].id)
        setRoomId(roomSelected[index].room[0].id);
        setHistory(roomSelected[index].user)
        setRoomFindId(roomSelected[index]._id)
    }

    return (

        <div className='h-full bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
            <h3 className="text-white flex justify-center py-16 underline underline-offset-4">Messagerie du trajet :</h3>

            <div className="flex flex-row justify-center">
                <div className="rounded-lg px-4 lg:px-8 mt-6 mr-12">
                    <div className="ml-32 w-full h-80 border border-sky-500 rounded-lg bg-[#efefef] overflow-y-auto max-h-96 scrollbar">
                        <h5 className="flex justify-center underline underline-offset-4 font-medium mt-4">Rooms :</h5>
                        <div className="leading-10">
                            {roomSelected.map((roomSelected, index) => (
                                <div key={index}>
                                    <button onClick={() => joinRoomId(index)}>{roomSelected.room[0].name}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex p-5 ml-36 mr-56 mt-6 flex-wrap w-full border border-sky-500 bg-white rounded-lg outline outline-offset-2 outline-blue-500 overflow-y-auto max-h-96">

                    <div className="">
                        {history.map((message, index) => (
                            <div key={index}>
                                <div>{message.user_name} : {message.message}</div>
                            </div>
                        ))}

                        {nameReceived.map((name, index) => (
                            <div key={index}>
                                <p>{name} : {messageReceived[index]}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-8 ">
                <input
                    className="rounded-lg mr-8 w-96"
                    type="text"
                    placeholder="Entrez votre message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <button
                    className="text-white p-4 bg-vert hover:bg-verth rounded-lg"
                    onClick={sendMessage}>Envoyer</button>
            </div>
        </div>
    );
}

export default chatSocket