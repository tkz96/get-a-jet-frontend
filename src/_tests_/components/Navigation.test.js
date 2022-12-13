import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navigation from '../../components/Navbar/Navigation';

describe('Navigation component', () => {
  test('should match Navigation snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <Navigation />
        ,
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
