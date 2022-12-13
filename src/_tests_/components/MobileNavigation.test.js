import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MobileNavigation from '../../components/Navbar/MobileNavigation';

describe('MobileNavigation component', () => {
  test('should match MobileNavigation snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <MobileNavigation />
        ,
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
