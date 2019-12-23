import React from "react";
import {Channel} from "../services/EventService";


function VideoList(props) {
    const videos = props.videos || []; // caso não exista objeto, então array vazio.

    function handleClick(video){
        Channel.emit('video:select', video) // emite determinado evento
    }


    return(
        <ul className={'video-list'}>
            {
                videos.map(video =>(
                    <li onClick={handleClick.bind(this, video)} className={'video'}>
                        <img src={video.img} alt={video.name} />
                        <div>{video.name}</div>
                    </li>

                ))

            }
        </ul>

    )

}



export default VideoList;