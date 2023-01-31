import React, { Component } from "react";
import Label from "./Label";
import "./ListItem.css";

export class ListItem extends Component {
    render() {
        const { 
            title,
            descr,
            isActive,
            onDelete,
            onLabelClick
            } = this.props;
        return (
            <div className="list-item-container">
                <div className="header-container">
                    <h4>{title}</h4>
                    <div className="delete-container">
                        <label onClick={onDelete}> Delete</label>
                    </div>
                </div>
                <div>{descr}</div>
                <div className="label-container">
                    <Label onAction={onLabelClick} isActive={isActive} />
                </div>
            </div>
        );
    }
}

export default ListItem;
