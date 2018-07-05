import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/both';
import '../imports/startup/client';
import '../imports/ui/forbole.scss';


import App from '../imports/ui/AppContainer.js';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});