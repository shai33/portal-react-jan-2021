import React, { Component } from 'react';
import './sideNavbar.css';


class LiItem extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const {title, icon, children, arrowDown} = this.props;
        return ( 
        <div className="c-liItemBorder">
            <div onClick={this.props.handleCollapse}
            className="c-liItem" >
                <span className=" m-3"><img src={icon}/></span>
                <span>{title}</span>
                {arrowDown}
            </div>
            {children}
        </div>
         );
    }
}
 
export default LiItem;