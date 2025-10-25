/* global test, expect */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

test('render', () => {
  render(<h1>Hola Mundo!</h1>)
  expect(screen.getByText('Hola Mundo!')).toBeInTheDocument()
})
