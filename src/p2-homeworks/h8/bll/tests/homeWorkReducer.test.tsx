import React from 'react';
import {checkYOAC, homeWorkReducer, sortNameAC} from "../homeWorkReducer";
import {initialPeopleType} from "../../HW8";

let initialState: initialPeopleType;

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, sortNameAC('up'));

    console.log(initialState);
     expect(newState).toEqual( [
         {_id: 1, name: "Александр", age: 66},
         {_id: 3, name: "Виктор", age: 44},
         {_id: 4, name: "Дмитрий", age: 40},
         {_id: 5, name: "Ирина", age: 55},
         {_id: 2, name: "Коля", age: 16},
         {_id: 0, name: "Кот", age: 3},
     ]);
});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, sortNameAC('down'));

    console.log(initialState)

    expect(newState).toEqual(initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 2, name: "Коля", age: 16},
        {_id: 5, name: "Ирина", age: 55},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 1, name: "Александр", age: 66},
    ]);
});

test("check age 18", () => {
    const newState = homeWorkReducer(initialState, checkYOAC(18));

    expect(newState).toEqual(initialState = [
        {_id: 1, name: "Александр", age: 66},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ])

});
