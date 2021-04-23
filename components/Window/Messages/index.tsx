import Message, { IMessage } from "../Message";
import c from './index.module.scss';

interface IMessages {
    messages: IMessage[];
}

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