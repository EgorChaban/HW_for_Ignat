import React from "react";
import Message from "./Message";

const messageData1 = {
    avatar: "https://briefly.ru/static/authors/gogol.jpg?1479846041",
    name: "Николай",
    message: "Саня, npm start нажимал?",
    time: '22:00',
};

const messageData2 = {
    avatar: "https://www.ikleiner.ru/pic/picture34.jpg",
    name: "Александр",
    message: "Коленька, конечно нажимал",
    time: '22:04',
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <br/><br/><br/>
            {/*should work (должно работать)*/}

            <Message
                avatar={messageData1.avatar}
                name={messageData1.name}
                message={messageData1.message}
                time={messageData1.time}
            />
            <Message
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;