import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
    render(<App />);
});

test('Ball and strikes are rendered', () => {
    const { getByTestId } = render(<App />);
    getByTestId(/ball-score/i);
    getByTestId(/strike-score/i);
})

test('Ball Button is rendered', () => {
    const { getByTestId } = render(<App />);
    getByTestId(/ball-button/i);
})

test('Strike Button is rendered', () => {
    const { getByTestId } = render(<App />);
    getByTestId(/strike-button/i);
})

test('Foul Button is rendered', () => {
    const { getByTestId } = render(<App />);
    getByTestId(/foul-button/i);
})

test('Hit Button is rendered', () => {
    const { getByTestId } = render(<App />);
    getByTestId(/hit-button/i);
})