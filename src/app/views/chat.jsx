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
    
    useEffect(async () => 
    {
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

        <div className="h-full bg-cover bg-[#e5f6ec]">
            <h1 className="flex flex-wrap mb-5 justify-center">Messagerie trajet</h1>
            <section className="flex">

                <div className="mt-16">
                    <div className="ml-16 flex-wrap w-full h-80 border border-sky-500 rounded-lg bg-[#efefef]">
                        <h5>Rooms</h5>
                        <div className="leading-10">

                            {roomSelected.map((roomSelected, index) => (
                                <div key={index}>
                                    <button  onClick={() => joinRoomId(index)}>{roomSelected.room[0].name}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="flex p-5 ml-24 mr-56 mt-16 flex-wrap w-full border border-sky-500 bg-white rounded-lg outline outline-offset-2 outline-blue-500 overflow-y-auto max-h-96">

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

            </section>
                    <div className="flex flex-wrap justify-center w-full mt-6">
                        <input
                            className="rounded-lg"
                            type="text"
                            placeholder="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                        <button onClick={sendMessage}>Envoyé</button>
                    </div>
        </div>
    );
}

export default chatSocket