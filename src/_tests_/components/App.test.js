import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import App from '../../components/App';

describe('App', () => {
  test('should match App snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
