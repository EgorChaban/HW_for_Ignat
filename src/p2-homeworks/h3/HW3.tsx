import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";


export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}


function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        const newUsers: UserType = {
            _id: v1(),
            name: name
        }
        setUsers([newUsers, ...users]);
    }

    return (
        <div>
            <hr/>
            homeworks 3

    <br/><br/><br/>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
