import React, { useEffect, useState } from "react"
import { selectUser } from "../redux-store/authenticationSlice";
import { useSelector } from 'react-redux';
import url from '../api/backend/socket_url';
import io from "socket.io-client";

var socket;

const chatSocket = () => {

    const user = useSelector(selectUser);

    const [name] = useState(user.username);
    const [roomId, setRoomId] = useState("");
    const [message, setMessage] = useState('');
    const [messageReceived, setMessageReceived] = useState([]);
    const [nameReceived, setNameReceived] = useState([]);

    useEffect( async () => {
        socket = io(url);

        socket.on('messagePriveReçu', (name, message) => 
        {
            setNameReceived(prevNameReceived => [...prevNameReceived, name]);
            setMessageReceived(prevMessageReceived => [...prevMessageReceived, message])
        });

        return () => {
            socket.disconnect();
        }
    }, []);

    const sendMessage = () => {
        if (roomId === "") 
        {
            socket.emit('messageEnvoye', message)
        }
        else 
        {
            socket.emit('messagePriveEnvoye', { message, roomId, name })
            setMessage('');
        }
    };

    const joinRoomId = () => {
        socket.emit('salle rejoint', roomId)
    }

    return (
        
        <div className="h-full flex-wrap bg-cover bg-[url('./imgs/gradientAccueilCarbuddy.png')]">
        
            <div className="h-10">

                <input 
                    type="text"
                    placeholder="roomId"
                    value={roomId}
                    onChange={(event) => setRoomId(event.target.value)}
                    />

                <button onClick={joinRoomId}>Join roomId</button>
            </div>

            <div className="m-5 p-5 flex-wrap h-80 justify-center border border-sky-500 bg-white">
                <div className="">
                    {nameReceived.map((name, index) => (
                        <div key={index}>
                            <p>{name}: {messageReceived[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container m-5">
                <input
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