import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
    render() {
      
        return(
            <div className="header">
                <ul>
                    <li>Home</li>
                    <li>Produce</li>
                    <li>About</li>
                </ul>
            </div>
        );
}
}
export default Header;