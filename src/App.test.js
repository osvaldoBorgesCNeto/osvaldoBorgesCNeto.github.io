import React from 'react';
import renderWithRouter from './tests/renderWithRouter';
import App from './App';
import { fireEvent } from '@testing-library/react';

describe('test', () => {
  test('Page Home', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Hello/);

    expect(home).toBeInTheDocument();
  })

  test('Page About', () => {
    const { getByText } = renderWithRouter(<App />);
    const buttonProjects = getByText('About');
    fireEvent.click(buttonProjects)

    const projects = getByText('About me');
    expect(projects).toBeInTheDocument();
  })

  test('Page Projects', () => {
    const { getByText } = renderWithRouter(<App />);
    const buttonProjects = getByText('Projects');
    fireEvent.click(buttonProjects)

    const projects = getByText('My Projects');
    expect(projects).toBeInTheDocument();
  })

  test('Page NotFound', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/404')

    const projects = getByText('Page not found');
    expect(projects).toBeInTheDocument();
  })

})