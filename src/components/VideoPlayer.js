import React, {Component} from "react";


class VideoPlayer extends Component{
    render() {
        return(
            <div className={'video-player'}>
                <video

                    src={this.props.url}
                    controls autoPlay loop
                />
                <button>X</button>
            </div>


        )
    }

}


export default VideoPlayer;