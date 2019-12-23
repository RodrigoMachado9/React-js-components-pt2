import React, {Component} from "react";


class VideoPlayer extends Component{
    constructor(props){
        super(props);
        this.videoElement = React.createRef();

    }


    render() {
        return(
            <div className={'video-player'}>
                <video

                    src={this.props.url}
                    controls autoPlay loop
                    ref={this.videoElement}
                />
                <button>X</button>
            </div>


        )
    }

}


export default VideoPlayer;