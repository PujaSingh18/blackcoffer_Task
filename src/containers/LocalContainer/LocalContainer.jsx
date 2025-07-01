import React, { Component } from 'react';
import Local from '../../components/local/Local';

export class LocalContainer extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <Local />
        )
    }
}
export default LocalContainer;