import React from "react";

export class Age1 extends React.Component {
    static defaultProps = {
        age: "21"
    }
    render() {
        return (
            <div>
                {this.props.age > 18 ? <p>Your age is {this.props.age}</p> : <p> You are very young!</p> }
            </div>
        )
    }
}