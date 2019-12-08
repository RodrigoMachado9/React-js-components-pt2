import React, {Component} from 'react';
import './App.css';
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import VideoCinema from "./components/VideoCinema";

const INITIAL_STATE = {
    videos: [],
    selectedVideo: {
        img: 'https://storage.coverr.co/thumbnails/coverr-raindrops--1572170453303',
        name: 'coverr-raindrops',
        url: 'https://storage.coverr.co/videos/coverr-raindrops--1572170453303?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTc1NTk5MTM1fQ.pcAJIcLDP5l-IL1tnjrPdojS_RxL7WOLCvfMUZiuaDU',



    }
};


class App extends Component{
    constructor(props){
        super(props);
        this.state = INITIAL_STATE;
    }

  render() {
    return(
        <div className={'App'}>
          <VideoList  {...INITIAL_STATE['videos']} />               // propriedades,  dados que passado pela tag, atribuindo ou controlado determinado estado de um componente.
          <VideoPlayer  {...INITIAL_STATE['selectedVideo']}/>
          <VideoCinema  isActivated={false}/>

        </div>

    )
  }

}

export default App;
