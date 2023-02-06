import React from "react";
import { Age } from "./Age";

export class WelcomeAgeRenderConditionally extends React.Component {
    static defaultProps = {
        name: "Micheal"
    }
    render() {
        return (
            <div>
                <p>Hello, {this.props.name}</p>
                {this.props.age > 18 && this.props.age < 65 && <p>Your age is {this.props.age}</p>}
            </div>
        )
    }
}