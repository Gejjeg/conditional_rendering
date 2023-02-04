import React from "react";
import { Welcome } from "./Welcome";
import { WelcomeModify } from "./Welcome2";

export class App extends React.Component {
    render() {
        return (
            <WelcomeModify name="Inyene" age="11"/>
        )
    }
};