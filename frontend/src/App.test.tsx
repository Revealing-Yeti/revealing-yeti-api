import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Payment from './Payment/Payment';

describe('The main app', () => {

  it('should render the Orders link', () => {
    render(<App />)
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });

  it('should render the payment link', () => {
    render(<Payment />)
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('should render the Home link', () => {
    render(<Payment />)
    expect(screen.getByRole('link', {name: "Home"})).toBeInTheDocument();
  });

  it('should render the Home header', () => {
    render(<Payment />)
    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
  });
}

)