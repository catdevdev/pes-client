import React from "react";
import IMessage from "./Models/IMessage"
import c from './index.module.scss';


const MessageComponent = (props: IMessage) => {
    return <div className={c.messageContainer}>
        <p className={c.username}>{props.username}</p>
        <p className={c.arrow}>{'=>'}</p>
        <p className={c.message}>
            {props.message}
        </p>
    </div>
};

export default MessageComponent;