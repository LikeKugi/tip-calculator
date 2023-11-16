import { afterEach, describe, expect } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '@/App';

describe('App tests', () => {

  afterEach(() => {
    cleanup();
  })

  it('should render App', function () {
    render(<App />);
    expect(screen.queryByText(/spl/i)).toBeInTheDocument();
  });

  it ('should work inputs and state', async function () {
    render(<App />);
    const billInput: HTMLInputElement = screen.getByRole('spinbutton', {name: 'Bill'});
    expect(billInput).toBeInTheDocument();
    const peopleInput: HTMLInputElement = screen.getByRole('spinbutton', {name: 'Number of People'})
    expect(peopleInput).toBeInTheDocument();
    const amountSpan: HTMLSpanElement = screen.getByRole('amount');
    expect(amountSpan).toBeInTheDocument();
    const totalSpan: HTMLSpanElement = screen.getByRole('total');
    expect(totalSpan).toBeInTheDocument();
    fireEvent.change(billInput, {target: {value: 100}})
    fireEvent.change(peopleInput, {target: {value: 2}})
    expect(billInput.value).toBe('100');
    expect(peopleInput.value).toBe('2');
    const resetButton = screen.getByText(/reset/i);

    await waitFor(() => {
      fireEvent.blur(billInput);
      fireEvent.blur(peopleInput);
      fireEvent.focus(resetButton);

      expect(amountSpan.textContent).toContain('50')
      expect(totalSpan.textContent).toContain('50')
    })
  })
})
