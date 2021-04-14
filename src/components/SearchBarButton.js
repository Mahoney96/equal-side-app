import React, { Component } from 'react';


class SearchBarButton extends Component {
    constructor() {
        super();

        this.state = {
            message: ""
        };
    }

    handleChange(value) {
        this.setState({ message: value });
    }


    render() {
        return(
            <div className="search-bar-border-container ">
                    <div className="search-box-text-housing">
                    <p className="search-bar-text">Search...</p>
                <input onChange={ e=> this.handleChange(e.target.value)} type="text"/>
                <p className="search-box-input-container ">{this.state.message}</p></div>
            </div>
        );
    }
}


export default SearchBarButton;

