import React, { Component } from 'react';
import Profile from '../../components/profile/Profile';

export class ProfileContainer extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <Profile/>
        )
    }
}
export default ProfileContainer;