import React from "react";

export class Age extends React.Component {
    static defaultProps = {
        age: "21"
    }
    render() {
        return (
            <div>
                {this.props.age > 18 && this.props.age < 65 && this.props.name==="John" && <p>Your age is {this.props.age}</p>}
            </div>
        )
    }
}