import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import App from './App.jsx';

export default AppContainer = withTracker(() => {
    return {
        currentUser: Meteor.user(),
        loggingIn: Meteor.loggingIn()
    };
})(App);
