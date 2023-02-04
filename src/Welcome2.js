import React from "react";

export class WelcomeModify extends React.Component {
    static defaultProps = {
        name: "Juliana"
    }; 
    render() {
        return (
            <div>
                <p>Hello, {this.props.name}!</p>
                {this.props.age && <p>Your age is {this.props.age}</p>}
            </div>
        )
    }
}