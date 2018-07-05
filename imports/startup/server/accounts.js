import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    'users.resendVerficationEmail'(){
        return Accounts.sendVerificationEmail(this.userId)
    }
})