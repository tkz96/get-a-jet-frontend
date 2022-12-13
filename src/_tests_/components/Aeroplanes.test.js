import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import Aeroplanes from '../../components/Aeroplanes';

describe('Aeroplanes component', () => {
  test('should match Aeroplanes snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Aeroplanes />
          ,
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
