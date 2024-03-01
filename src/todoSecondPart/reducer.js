import React from 'react'
import { ADDNEW, DELETE, COMPLETE } from './actions'
// import uuid from 'uuid'

function reducer(state = [], actions) {

    // {
    //     type:"DELETE",
    //     payload:{
    //         id:"asdasd"
    //     }
    // }
    if (actions.type === ADDNEW) {
        const newTodo = { task: actions.payload.task, completed: false, id: state.length + 1 }
        return [newTodo, ...state]
    }
    if (actions.type === DELETE) {
        return state.filter(i => i.id !== actions.payload.id)
    }
    if (actions.type === COMPLETE) {
        let data = []
        for (let i of state) {
            if (i.id === actions.payload.id) {
                // i.completed=true
                const newData = { ...i, completed: true }
                data.push(newData)

            } else {
                data.push(i)
            }
        }

        // return state.map(i => i.id === actions.payload.id ? {  ...i,completed: true } : i)

        return data


    }
    return state
}

export default reducer

// const tasks = [
//     { completed: false, id: 12, task: "sleep" },
//     { completed: false, id: 122, task: "gym" },
//     { completed: false, id: 2, task: "swim" },
//     { completed: false, id: 102, task: "shoppingh" },
// ]

// id = 102
// [
// { completed: false, id: 12, task: "sleep" },
//     { completed: false, id: 122, task: "gym" },
//     { completed: false, id: 2, task: "swim" },
//     { completed: true, id: 102, task: "shoppingh" },
// ]


