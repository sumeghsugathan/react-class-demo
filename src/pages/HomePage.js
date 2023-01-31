import { Component } from "react";
import Tools from "../component/Tools";
import SimpleList from "../list/SimpleList";
import "./HomePage.css";


class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            activeState: "all",
        };
    }
    componentDidMount(){
        fetch('/data.json')
        .then((data)=>{
            return data.json();
        })
        .then((data)=>{
            this.setState({
                items:data
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        console.log('gggg');
    }
    onListChange = (event) => {
        const value = event.target.value;
        this.setState({
            activeState: value,
        });
    };
    handleDelete = (arg) => {
        console.log("delete", arg);
        const newList = this.state.items.filter((element) => element.id !== arg.id);
        this.setState({
            items: newList,
        });
    };
    handleLabelClick=(param)=>{
        this.setState({
            activeState:param
        })
    }

    render() {
        const { items, activeState } = this.state;
        const newList = items.filter((item) => {
            if (activeState === "all") {
                return true;
            }
            if (activeState === "active") {
                return item.isActive === true;
            }
            if (activeState === "non-active") {
                return item.isActive === false;
            }
            return false;
        });

        return (
            <Tools labelValue={activeState} onAction={this.onListChange} count={items.length}>
                <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete} />
            </Tools>
        );
    }
}

export default HomePage;
