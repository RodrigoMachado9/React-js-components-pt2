import React from "react";



function VideoList() {
    return(
        <ul className={'video-list'}>
            <li className={'video'}>
                <img src={'https://storage.coverr.co/thumbnails/coverr-raindrops--1572170453303'} alt={'coverr-raindrops--1572170453303'} />
                <div>Cover-Raind-Rops</div>
            </li>
            <li className={'video'}>
                <img src={'https://storage.coverr.co/thumbnails/coverr-hills-landscape-1568652619375'} alt={'coverr-hills-landscape-1568652619375'} />
                <div>Cover-Hills-Landscap</div>
            </li>
            <li className={'video'}>
                <img src={'https://storage.coverr.co/thumbnails/coverr-mountains-view-1563376688037'} alt={'coverr-mountains-view-1563376688037'} />
                <div>Cover-Mountains-View</div>
            </li>
            <li className={'video'}>
                <img src={'https://storage.coverr.co/thumbnails/coverr-amalfi-coast-1570371443102'} alt={'coverr-amalfi-coast-1570371443102'} />
                <div>Cover-Amalfi-Coast</div>
            </li>
        </ul>

    )

}



export default VideoList;