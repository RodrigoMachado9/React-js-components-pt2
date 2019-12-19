import React, {Component} from 'react';
import './App.css';
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import VideoCinema from "./components/VideoCinema";
import {VideoService} from "./services/VideoService";

const INITIAL_STATE = {
    videos: [],
    selectedVideo: {}
};


class App extends Component{
    constructor(props){
        super(props);
        this.selectVideo = this.selectVideo.bind(this);
        this.state = INITIAL_STATE;
    }

    // up of server for simulate data bank...
    // sudo npm install -g @treinaweb/tw-dev-server
    // url: https://treinaweb.github.io/tw-dev-server/
    async componentDidMount() {
        const videos =  await VideoService.list();
        this.setState({videos});
        this.selectVideo(videos[0]);
    }

    selectVideo (video){
        this.setState({
            selectedVideo: video
        })

    }


    // propriedades,  dados que passado pela tag, atribuindo ou controlado determinado estado de um componente.
    // utilizando o recurso spread no componente > VideoPlayer.
  render() {

    return(
        <div className={'App'}>
          <VideoPlayer  {...this.state.selectedVideo} />
          <VideoList  videos={this.state.videos}/>
          <VideoCinema  isActivated={false}/>

        </div>

    )
  }

}

export default App;
