import {Component } from "react";
import './Tools.css'
export class Tools extends Component {
    render() {
        const {
             children ,
             onAction,
             labelValue,
             count
            } = this.props;

        return (
            <div>
                <div className="custom-select">
                    <select value={labelValue} onChange={onAction} name="status">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="non-active">Non Active</option>
                    </select>
                </div>
                {children}
                <div className="count-container">Total {count} items</div>
            </div>
        );
    }
}

export default Tools;
