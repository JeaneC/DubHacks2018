import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import App from './App';
import Auth from './Auth';

// Read https://reactnavigation.org/docs/en/auth-flow.html for a better auth flow
// We will only create a sign-in screen for demonstration

export default createSwitchNavigator({
  Auth: Auth,
  App: App
});
