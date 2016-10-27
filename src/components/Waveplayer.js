import React from 'react'
import Wavesurfer from 'react-wavesurfer'

class Waveplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      pos: 0,
      song: null
    };

    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
    this.makeBlobs = this.makeBlobs.bind(this);
  }

  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    })
  }

  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    })
  }

  makeBlobs(e) {
    var file = e.target.files[0]
    var freader = new FileReader();
    freader.onload = (e) => {
      this.setState({
        song: e.target.result
      })
    }
    freader.readAsArrayBuffer(file)
  }
    

  render() {
    return (
      <div>
        <input type='file' onChange={this.makeBlobs} />
        <Wavesurfer 
          audioFile={this.state.song}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
        />
      </div>
    )
  }
}

export default Waveplayer
