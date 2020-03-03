import React, { Component } from 'react';
import pollService from '.'

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pollBank: {},
        };
    }

    getPoll = async () => {
        pollService().then(poll => {
            this.setState({
                pollBank: poll,
            });
        });
    };


    async componentWillMount() {
        await this.getPoll();
    }
}

export default Data;