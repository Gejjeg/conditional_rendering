import React from "react";
import { Welcome } from "./Welcome";
import { WelcomeModify } from "./Welcome2";
import { WelcomeAgeRenderConditionally } from "./Welcome3";

export class App extends React.Component {
    render() {
        return (
            <WelcomeAgeRenderConditionally name="Bassey"/>
        )
    }
};