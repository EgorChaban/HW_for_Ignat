import {initialPeopleType} from "../HW8";

type sortNameUpActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type checkYOActionType = {
    type: 'CHECK'
    payload: number
}

type ActionTypes = sortNameUpActionType | checkYOActionType

const initialState: initialPeopleType = []

export const homeWorkReducer = (state = initialState, action: ActionTypes): initialPeopleType => {
    switch (action.type) {
        case "sort": {
            if (action.payload === 'up') {
                const newState = [...state]
                return newState.sort((a, b) => a.name > b.name ? 1 : -1)
            } else {
                const newState = [...state]
                return newState.sort((a, b) => a.name > b.name ? -1 : 1)
            }
        }
        case "CHECK": {

            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
};

export const sortNameAC = (payload: 'up' | 'down'): sortNameUpActionType => {
    return {
        type: 'sort',
        payload
    }
}

export const checkYOAC = (payload: number): checkYOActionType => {
    return {
        type: 'CHECK',
        payload
    }
}