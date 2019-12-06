import React, {Component} from "react";




class VideoPlayer extends Component{
    render() {

        return(
            <div className={'video-player'}>
                <video
                    src={'https://storage.coverr.co/videos/coverr-raindrops--1572170453303?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTc1NTk5MTM1fQ.pcAJIcLDP5l-IL1tnjrPdojS_RxL7WOLCvfMUZiuaDU'}
                    controls autoPlay loop
                />
                <button>[]</button>
            </div>


        )
    }

}


export default VideoPlayer;