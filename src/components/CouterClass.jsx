import React from "react";

export default class CounterClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    render() {
        const handleClick = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        return (
            <button onClick={handleClick}>{this.state.count}</button>
        )
    }
}