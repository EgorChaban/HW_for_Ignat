import React, {useState} from "react";
import {checkYOAC, homeWorkReducer, sortNameAC} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


export type initialPeopleType = Array<peopleType>



export type peopleType = {
    _id: number
    name: string
    age: number
}

export const initialPeople: initialPeopleType = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            {p.name}, {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortNameAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortNameAC('down')))
    const sort18YO = () => setPeople(homeWorkReducer(initialPeople, checkYOAC(18)))
    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <br/>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <br/>
            <div><SuperButton onClick={sort18YO}>check 18</SuperButton></div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
