import React, { Component } from 'react';
import History from '../../components/profile/history/History';

export class HistoryContainer extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <History />
        )
    }
}

export default HistoryContainer