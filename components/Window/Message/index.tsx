import c from './index.module.scss';

export interface IMessage {
    username: string,
    message: string
}

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