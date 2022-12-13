import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavLinks from '../../components/Navbar/NavLinks';

describe('NavLinks component', () => {
  test('should match NavLinks snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <NavLinks />
        ,
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
