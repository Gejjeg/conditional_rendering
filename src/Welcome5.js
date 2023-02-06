import React from "react";
import { Age1 } from "./age1";

export class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>Hello, {this.props.name}</p>
                <Age1 age={this.props.age}/>
            </div>
        )
    }
}