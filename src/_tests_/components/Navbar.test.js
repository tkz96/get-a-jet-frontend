import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../../components/Navbar/Navbar';

describe('Navbar component', () => {
  test('should match Navbar snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <Navbar />
        ,
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
