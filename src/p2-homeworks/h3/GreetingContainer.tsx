import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Greeting, {GreetingPropsType} from "./Greeting";
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void

}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {

    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        if(e.currentTarget.value){
            setError('')
        }
    };


    const addUser = () => {
        if (name) {
            addUserCallback(name)
            alert(`Hello  ${name}!`);
        } else {
            setError('add name')
        }
        setName('')

    };

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}


        />
    );
}

export default GreetingContainer;
