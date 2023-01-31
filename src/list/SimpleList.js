import React, { Component } from "react";
import "../pages/HomePage.css";
import ListItem from "./ListItem";

export class SimpleList extends Component {
    render() {
        const { data, onAction ,onLabelClick} = this.props;
        return (
            <div className="list-container">
                {data.map((data, index) => {
                    return (
                        <ListItem
                        onLabelClick={onLabelClick}
                            onDelete={() => {
                                onAction(data);
                            }}
                            key={index}
                            title={data.title}
                            descr={data.descr}
                            isActive={data.isActive}
                        />
                    );
                })}
            </div>
        );
    }
}

export default SimpleList;
