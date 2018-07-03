import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import 'bootstrap/scss/bootstrap.scss';
// import '../imports/ui/stylesheets/material-kit.scss';

import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});