import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ResponsiveDialog from "./Dialog";

test("TESTS if modal button exists", () => {
    render(<ResponsiveDialog />)
    const modalButton = screen.getByText("Open responsive dialog")

    expect(modalButton).toBeInTheDocument()

    fireEvent.click(modalButton)

    const agreeButton = screen.getByText('Disagree')

    expect(agreeButton).toBeInTheDocument()
})