import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number


}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {


    const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }
    const inputClass = error ? s.errorInputNew : '';

    return (
        <div className={s.wrapper}>
            <h3>Введите имя:</h3>
            <SuperInputText value={name}
                            onChange={setNameCallback}
                            className={inputClass}
                            onKeyPress={pressEnter}
                            error={error}/>

            <SuperButton onClick={addUser}
                         className={s.btn}>
                add</SuperButton>
            <span><b>Кол-во участников: </b>{totalUsers}</span>

        </div>
    );
}

export default Greeting;
