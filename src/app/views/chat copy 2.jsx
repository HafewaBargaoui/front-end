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
            socket.emit('messagePriveEnvoye', { message, roomId, name })
            setMessage('');
        }
    };

    const joinRoomId = async (index) => {
        console.log("index : " + index);
        console.log(roomSelected[index]);
        socket.emit('salle rejoint', roomSelected[index].room[0].id)
    }

    return (

        <div className="h-full bg-cover bg-[url('./imgs/gradientAccueilCarbuddy.png')]">
            <h1 className="flex flex-wrap mb-5 justify-center">Messagerie</h1>
            <section className="flex">

                <div>
                    <div className="ml-16 flex-wrap w-full h-80 border border-sky-500 bg-white">
                        <h5>Rooms</h5>
                        {roomSelected.map((roomSelected, index) => (
                            <div key={index}>
                                <button  onClick={() => joinRoomId(index)}> index N°{index} / {roomSelected.room[0].name}</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex ml-24 mr-56 flex-wrap w-full border border-sky-500 bg-white">
                    <div>

                        {history.map((message, index) => (
                            <div key={index}>
                                <div>{message.user_name} {message.message}</div>
                            </div>
                        ))}

                        {nameReceived.map((name, index) => (
                            <div key={index}>
                                <p>{name} {messageReceived[index]}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-end justify-center w-full m-2">
                        <input
                            type="text"
                            placeholder="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                        <button onClick={sendMessage}>Envoyé</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default chatSocket