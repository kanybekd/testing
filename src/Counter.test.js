import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from "./Counter";


test("tests Counter component", () => {
    render(<Counter />)
    const counter = screen.getByTestId("counter")
    const input = screen.getByTestId("input")
    const increment = screen.getByTestId("increment")
    const decrement = screen.getByTestId("decrement")
    expect(counter).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(increment).toBeInTheDocument()
    expect(decrement).toBeVisible()

})
test("tests Counter component CONTENTS", () => {
    render(<Counter />)
    const counter = screen.getByTestId("counter")
    const input = screen.getByTestId("input")
    const increment = screen.getByTestId("increment")
    const decrement = screen.getByTestId("decrement")
    expect(counter).toHaveTextContent('0')
    expect(input).toHaveValue('')
    expect(increment).toHaveTextContent('increment')
    expect(decrement).toHaveTextContent('decrement')

})
test("tests Counter component functionalities", () => {
    render(<Counter />)
    const counter = screen.getByTestId("counter")
    const input = screen.getByRole("textbox")
    const increment = screen.getByTestId("increment")
    const decrement = screen.getByTestId("decrement")
    fireEvent.click(increment)
    expect(counter).toHaveTextContent('1')
    fireEvent.click(decrement)
    expect(counter).toHaveTextContent('0')
    fireEvent.change(input, {
        target: {
            value: "hello how are you"
        }
    })
    expect(input).toHaveValue('hello how are you')
    expect(input.value)
    // const increment=jest.fn()

})
test("TESTS if modal button exists", () => {
    render(<Counter />)
    // render(<ResponsiveDialog />)
    const modalButton = screen.getByText("Open responsive dialog")

    expect(modalButton).toBeInTheDocument()

    fireEvent.click(modalButton)

    // const agreeButton = screen.getByText('Disagreeee')
    waitFor(() => expect(screen.getByText('Payment')).toBeInTheDocument())

})

test("List of countries", () => {
    render(<Counter />)
    const listC = screen.queryAllByRole("listitem")
    // console.log(listC)
    const countryList = ["USA", "Germany", "Malta"]
    listC.forEach((i, ind) => expect(i).toHaveTextContent(countryList[ind]))

})