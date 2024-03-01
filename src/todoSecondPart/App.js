import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Todo from './todo'
import { ADDNEW } from './actions';

function App() {
    const [newTask, setNewTask] = useState("")
    const dispatch = useDispatch()
    const handleClick = () => {
        if (newTask) {

            dispatch({
                type: ADDNEW,
                payload: {
                    task: newTask,

                }
            })
            setNewTask('')
        }
    }

    return (
        <div className='container' >
            <div className='row'>
                <div className="col-12 col-sm-4">
                    <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                    <button onClick={handleClick}> Add</button>
                    <Todo />
                </div>
            </div>
        </div>

    )
}

export default App

// function addTwo(a, b) {
//     if (+a.length < 10, b) {

//         return a + b
//     } else {
//         return "hey you put too long number"
//     }
// }

// addTwo(-99999999999999999, -0.00000000001)




