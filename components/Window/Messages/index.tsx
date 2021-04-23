import React from "react";
import Message from "../Message";
import IMessages from "./Models/IMessages";
import c from './index.module.scss';
import IMessage from "../Message/Models/IMessage";

const MessagesComponent = (props: IMessages) => {
    var messages = [];
    for (var i = 0; i < props.messages.length; i++) {
        var message = props.messages[i];
        messages.push(<Message message={message.message} username={message.username}></Message>)
    }
    return <div className={c.wrapper}>
        <div className={c.container}>
            {messages}
        </div>
    </div>
}

export default MessagesComponent;