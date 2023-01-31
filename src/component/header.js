import { Component } from "react";
import "./header.css";
export class Header extends Component {
    render() {
        const{onMenuSelect}=this.props
        return (
            <div className="container">
                <header>
                   <h1>Heading</h1>
                </header>
                <nav>
                    <span onClick={()=>{
                      onMenuSelect('home')  
                    }}>Home</span>
                    <span onClick={()=>{
                      onMenuSelect('usage')  
                    }}>Usage</span>
                    <span onClick={()=>{
                      onMenuSelect('settings')  
                    }}>Settings</span>
                    <span onClick={()=>{
                      onMenuSelect('logout')  
                    }}>Logout</span>
                </nav>
            </div>
        );
    }
}

export default Header;
