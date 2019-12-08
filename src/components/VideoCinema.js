import React from "react";

function VideoCinema(props){
    const style = {
        display: (props.isActivated ? 'inline-block': 'none')

    };

    return(
        <div className="video-cinema" style={ style }/>
    );
}


export default VideoCinema;
