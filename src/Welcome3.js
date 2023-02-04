import React from "react";
import { Age } from "./Age";

export class WelcomeAgeRenderConditionally extends React.Component {
    static defaultProps = {
        name: "Micheal"
    }
    render() {
        return (
            <div>
                <p>Hello, {this.props.name}!</p>
                <Age age="58"/>
            </div>
        )
    }
}