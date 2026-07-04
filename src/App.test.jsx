import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders Smart Apps homepage', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /diseño, software y cloud/i })).toBeInTheDocument();
});
