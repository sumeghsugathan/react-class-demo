import { Component } from "react";
import "./Label.css";
export class Label extends Component {
    render() {
        const props = this.props;
        const style = props.isActive ? { background: "green" } : { background: "orange" };

        return (
            <span
                className="label"
                onClick={() => {
                    props.onAction(props.isActive ? "active" : "non-active");
                }}
                style={style}
            >
                {props.isActive ? "Active" : "Non Active"}
            </span>
        );
    }
}

export default Label;
