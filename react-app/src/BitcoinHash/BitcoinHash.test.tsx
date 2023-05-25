import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import BitcoinHash from './BitcoinHash';

test('Renders the app name', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BitcoinHash />
    </Provider>
  );

  expect(getByText(/Bitcoin Hash/i)).toBeInTheDocument();
});
