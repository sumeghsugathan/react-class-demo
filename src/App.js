import React, { Component } from "react";
import Footer from "./component/footer";
import Header from "./component/header";
import "./App.css";
import HomePage from "./pages/HomePage";
import DummyPage from "./pages/DummyPage";
import Usage from "./pages/Usage";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelected: "home",
        };
    }
    handleMenuSelect = (value) => {
        console.log(value);
        this.setState({
            currentSelected: value,
        });
    };
    getPage() {
        const { currentSelected } = this.state;
        switch (currentSelected) {
            case "home":
                return <HomePage />;
            case "usage":
                return <Usage />;
            case "settings":
                return <DummyPage name="Settings" />;
            case "logout":
                return <DummyPage name="Logout" />;
            default:
                break;
        }
    }
    render() {
        return (
            <div className="main-container">
                <Header onMenuSelect={this.handleMenuSelect} />
                <div className="body-container">{this.getPage()}</div>

                <Footer />
            </div>
        );
    }
}

export default App;
