import React, { Component } from 'react';
import Alert from '../../components/alert/Alert';

export class AlertContainer extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <Alert/>
        )
    }
}
export default AlertContainer;