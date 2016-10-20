import { connect } from 'react-redux'
import Waveplayer from '../Waveplayer'

const mapStateToProps = (state) => {
  return {
    file: state.uploadedFile 
  }
}

const WaveContainer = connect(mapStateToProps)(Waveplayer)

export default WaveContainer
