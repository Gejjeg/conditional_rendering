import React from "react";
import { Age } from "./Age";

export class Welcome4 extends React.Component {
    static defaultProps = {
        name: "Micheal"
    }
    render() {
        return (
            <div>
                <p>Hello, {this.props.name}!</p>
                <Age age="21" name={this.props.name}/>
            </div>
        )
    }
}