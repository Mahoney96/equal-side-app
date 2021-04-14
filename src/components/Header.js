import React, { Component } from 'react';






        // Looking into making below a HOC, where it's being fed the above simpler component.
        // SEE if it's possible to create both components in the same file. //
class EqualHeader extends Component {
    render(){
        return(
            <div className="Equal-header">
                
                <a className="Equal-logo"
                    href="https://www.strava.com/local#us"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Hello Equalside, your first Header. 
                </a>
           
                
                <div className="">
                <a className="Equal-logo"
                    href="https://www.strava.com/local#us"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Hello Equalside, Click thru...
                </a>
                 </div>
                <br></br>

                <div className="">Top Banner.
                <a className="Equal-logo"
                    href="https://www.strava.com/local/us/providence/running"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Hello Equalside, Click thru...
                </a>
                </div>
                <br></br>

                <div className="">SearchBar component container.
                <a className="Equal-logo"
                    href="https://www.strava.com/local/us/new-york-city/cycling"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Hello Equalside, Click thru...
                </a>
                </div>
                <br></br>
            </div>
        );
    }
};

export default EqualHeader;





