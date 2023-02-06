import React from "react";
import { Welcome } from "./Welcome";
import { WelcomeModify } from "./Welcome2";
import { WelcomeAgeRenderConditionally } from "./Welcome3";
import { Welcome4 } from "./Welcome4";
import { Hello } from "./Welcome5";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="Masodi" age={28}/>
                <WelcomeModify name="Grey" age={32} />
                <WelcomeAgeRenderConditionally name="Peter" age={45} />
                <Welcome4 name="John"/>
                <Hello name="Margaret" age={17}/>
            </div>
        )
    }
};