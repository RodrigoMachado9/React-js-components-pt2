import React, {Component} from "react";




class VideoPlayer extends Component{
    render() {
        const video = this.props;
        {console.log('heeee carai', video)}
        return(
            <div className={'video-player'}>
                <video

                    src={video.url}
                    controls autoPlay loop
                />
                <button>[]</button>
            </div>


        )
    }

}


export default VideoPlayer;