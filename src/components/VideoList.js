import React from "react";



function VideoList(props) {
    const videos = props.videos || []; // caso não exista objeto, então array vazio.


    return(
        <ul className={'video-list'}>
            {
                videos.map(video =>(
                    <li className={'video'}>
                        <img src={video.img} alt={video.name} />
                        <div>{video.name}</div>
                    </li>

                ))

            }
        </ul>

    )

}



export default VideoList;