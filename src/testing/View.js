import React, { Component } from 'react';

export default class view extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.state = {

        };
    };

    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef.current.focus(), ".....");
    }

    render() {
        return (
            <div> <input type="text" ref={this.inputRef} /> </div>
        );
    }
}
