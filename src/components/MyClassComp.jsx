import React from "react";

export default class MyClassComp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Kyle'
        }
    }

    render() {
        const handleClick = () => {
            this.setState({
                name: "Sally"
            })
        }
        return <h1 onClick={handleClick}>HI {this.state.name}</h1>
    }
}