import React, { Component } from 'react';
import Draft from '../../components/profile/draft/Draft';

export class DraftContainer extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <Draft/>
        )
    }
}

export default DraftContainer