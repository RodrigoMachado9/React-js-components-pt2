import React, {Component} from 'react';
import './App.css';
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import VideoCinema from "./components/VideoCinema";
import VideoInline from "./components/VideoInline";
import {VideoService} from "./services/VideoService";
import {Channel} from "./services/EventService";


const INITIAL_STATE = {
    videos: [],
    selectedVideo: {}
};


class App extends Component{
    constructor(props){
        super(props);
        this.selectVideo = this.selectVideo.bind(this);
        this.state = INITIAL_STATE;
        this.inlineVideo = React.createRef();
        this.cinemaVideo = React.createRef();
    }

    // >>>>>                                    Esse componente é executado, logo quando o component é exibido na tela.
    // up of server for simulate data bank...
    // sudo npm install -g @treinaweb/tw-dev-server
    // get free videos and images in coverr.co
    // url: https://treinaweb.github.io/tw-dev-server/
    async componentDidMount() {
        const videos =  await VideoService.list();
        this.setState({videos});
        // this.selectVideo(videos[2]);
        Channel.on('video:select', this.selectVideo)    // cadastra determinado evento
    }

        selectVideo (video){
        this.setState({
            selectedVideo: video
        })

    }

    componentWillUnmount() {
        Channel.removeListener('video:select', this.selectVideo)
    }


    // propriedades,  dados que passado pela tag, atribuindo ou controlado determinado estado de um componente.
    // utilizando o recurso spread no componente > VideoPlayer.
  render() {

    return(
        <div className={'App'}>
          <VideoPlayer  {...this.state.selectedVideo} />
            <VideoInline>
                <div ref={this.inlineVideo}> </div>
            </VideoInline>
          <VideoList  videos={this.state.videos}/>
            <VideoCinema  isActivated={false}>
                <div ref={this.cinemaVideo}> </div>
            </VideoCinema>

        </div>

    )
  }

}

export default App;
