import React, { useState } from 'react'
import ResponsiveDialog from './Dialog'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function Counter() {
    const [show, setShow] = useState(false)
    const [counter, setCount] = useState(0)
    const [value, setValue] = useState('')

    const handleIncr = () => setCount(counter => counter + 1)
    const handleDecr = () => setCount(counter => counter - 1)
    const handleChange = (e) => setValue(e.target.value)

    return (
        <div style={{ width: '20%', border: "1px solid black", display: "flex", margin: 'auto', flexDirection: "column" }}>
            <div style={{ textAlign: "center", margin: "15px", padding: "10px" }}>
                <h1 data-testid="counter">{counter}</h1>
                <input data-testid='input' type="text" value={value} onChange={handleChange} /><br />
                <Divider />
                <br />
                <Button data-testid='increment' onClick={handleIncr} variant="contained" color="success">
                    increment
                </Button>
                <Button data-testid='decrement' onClick={handleDecr} variant="contained" color="success">
                    decrement
                </Button>
            </div>
            <Divider />
            <>
                <ResponsiveDialog />
            </>
            <ul data-testid='countries'>
                <li>
                    USA
                </li>
                <li>
                    Germany
                </li>
                <li>
                    Malta
                </li>
            </ul>
        </div>
    )
}

export default Counter;

// What is unit testing in React?
// A) Testing individual components in isolation //correct
// B) Testing the entire application as a whole //e2e
// C) Testing the integration between different components
// D) Testing only the Redux state management

// Which library is commonly used for unit testing React components?
// A) Jest
// B) Mocha
// C) Jasmine
// D) Selenium


// What does Jest provide for testing React components?
// A) Assertion utilities
// B) Mocking functionalities
// C) Test runners
// D) All of the above

// What is the purpose of mocking in unit testing React components?
// A) To mimic the behavior of external dependencies
// B) To ensure asynchronous operations run smoothly
// C) To validate the UI layout
// D) To optimize performance

// Which of the following is NOT a valid Jest matcher for testing React components?
// A) toMatchSnapshot()
// B) toHaveTextContent()
// C) toBeVisible()
// D) toRenderCorrectly()

// What is the primary benefit of unit testing React components?
// A) Ensuring the application's overall functionality
// B) Identifying performance bottlenecks
// C) Catching bugs early in the development process
// D) Optimizing the user interface for better user experience