import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE, COMPLETE } from './actions'

function Todo() {
    const data = useSelector(store => store)
    const dispatch = useDispatch()
    console.log(data, "<<<<<<")
    const handleDelete = (id) => {
        dispatch({
            type: DELETE,
            payload: {
                id: id
            }
        })
    }
    const handleComplete = (id) => {
        dispatch({
            type: COMPLETE,
            payload: {
                id: id
            }
        })
    }
    return (
        <>

            {!!data.length && data.map(item => {
                return (

                    <div style={{ display: "flex", color: item.completed ? "green" : '' }}>
                        <p>{item.task}</p>
                        <button style={{ margin: "0 10px" }} onClick={() => handleDelete(item.id)}>delete</button>
                        <button onClick={() => handleComplete(item.id)}>mark as complete</button>
                    </div>
                )
            })}
        </>
    )
}

export default Todo