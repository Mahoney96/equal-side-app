import e from "express";
import React from "react";

class LoggingButton extends React.Component {
    

    handleClick = () => {
        console.log('this is:', this);
    }


    render() {
        return (
            <button onClick={this.handleClick}>
                Click Me
            </button>
        );
    }
}


// Paasing Arguments to Event Handlers //

<button onClick={(e) =>this.deleteRow(id, e)}>Delete Row</button>


// the ' e ' in event handler related functions represents the React event that will be passed as a second argument after the ID.