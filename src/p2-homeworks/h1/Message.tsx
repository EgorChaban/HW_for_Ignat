import React from "react";
import m from './Message.module.css';


type MessageData = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageData) {
    return (
        <div className={m.message}>
            <img src={props.avatar} alt="" className={m.img}/>
            <div className={m.body}>
                <div className={m.triangle}></div>
                <div className={m.title}>{props.name}</div>
                <div className={m.descr}>
                    <div className={m.text}>{props.message}</div>
                    <div className={m.time}>{props.time}</div>
                </div>
            </div>
        </div>
    );
}

export default Message;
