import React from "react";
import MessageModel from "./Models/IMessage"
import c from './index.module.scss';

export default class Message extends React.Component<MessageModel, {}> {
    render() {
        return <div className={c.messageContainer}>
            <p className={c.username}>{this.props.username}</p>
            <p className={c.arrow}>{'=>'}</p>
            <p className={c.message}>
                {this.props.message}
            </p>
        </div>
    }
}