import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import App from './App';
import Auth from './Auth';
import DubHome from './DubHome';
import Resources from './Resources';
import ReportNow from './ReportNow';
import ContactFriend from './ContactFriend';
import FriendMessage from './FriendMessage';
import When1 from './Questions/When1';
import Story1 from './Questions/Story1';
import People1 from './Questions/People1';
import When2 from './Questions/When2';
import Where1 from './Questions/Where1';
import Feels1 from './Questions/Feels1';
import Feels2 from './Questions/Feels2';

import Contact1 from './Questions/Contact1';
import Report1 from './Questions/Report1';
import Name from './Questions/Name';
import Settings from './Settings';
import Languages from './Language';

// Read https://reactnavigation.org/docs/en/auth-flow.html for a better auth flow
// We will only create a sign-in screen for demonstration

const SwitchNav = createSwitchNavigator({
  Settings: Settings,
  DubHome: DubHome,
  Languages: Languages,
  Where1: Where1,
  When2: When2,
  When1: When1,
  Name: Name,
  Report1: Report1,
  Contact1: Contact1,
  People1: People1,
  Story1: Story1,
  Feels2: Feels2,
  Feels1: Feels1,
  FriendMessage: FriendMessage,
  ContactFriend: ContactFriend,
  ReportNow: ReportNow,
  Resources: Resources,
  Auth: Auth,
  App: App
});

// DubHome is First
export default SwitchNav;
