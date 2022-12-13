import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import Aeroplane from '../../components/Aeroplane';

describe('Aeroplane component', () => {
  test('should match Aeroplane snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Aeroplane />
          ,
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
