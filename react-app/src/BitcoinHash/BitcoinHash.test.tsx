import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import BitcoinHash from './BitcoinHash';

test('Sun Rise', () => {
  const theSunAlwaysRises = true
  expect(theSunAlwaysRises);
});

test('Renders the header', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BitcoinHash />
    </Provider>
  );
  expect(getByText(/Bitcoin Hash/i)).toBeInTheDocument();
});
