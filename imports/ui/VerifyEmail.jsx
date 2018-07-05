import React, { Component } from 'react';
import { Container, Alert } from 'reactstrap';
import { toast } from 'react-toastify';

export default class VerifyEmail extends Component{

    sendVerificationEmail = (e) =>{
        e.preventDefault();
        Meteor.call('users.resendVerficationEmail', (err, result) => {
            if (err){
                console.log(err);
            }
            else{
                console.log(result);
                toast("Email sent. Please check you email for the verification link.");
            }
        });
    }

    render(){
        return <div>
            <h1>Welcome!</h1>
            <Alert color="success">
                <h4 className="alert-heading">Please verify your email!</h4>
                <p>
                    Aww yeah, you successfully read this important alert message. This example text is going
                    to run a bit longer so that you can see how spacing within an alert works with this kind
                    of content.
                    </p>
                <hr />
                <p className="mb-0">
                    If you have lost your verification email, you can <a href="#" onClick={this.sendVerificationEmail}>request for resending it</a>.
                </p>
            </Alert>
        </div>
    }
}