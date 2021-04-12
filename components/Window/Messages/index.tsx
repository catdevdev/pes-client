import React from "react";
import Message from "../Message";
import IMessages from "./Models/IMessages";
import c from './index.module.scss';

export default class Messages extends React.Component<IMessages, {}> {
    render() {
        var messages = [];
        for (var i = 0; i < this.props.messages.length; i++) {
            var message = this.props.messages[i];
            messages.push(<Message message={message.message} username={message.username}></Message>)
        }

        return  <div className={c.wrapper}>
                    <div className={c.container}>
                        {messages}
                    </div>
                </div>
    }
}