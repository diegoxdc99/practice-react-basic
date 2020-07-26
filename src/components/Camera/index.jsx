import React, { Component } from 'react'
import styles from './camera.module.scss'

export default class Camera extends Component {
    streamVideo = null;
    videoRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            videoStream: null
        }
    }
    async componentDidMount() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video: {}});
            this.videoRef.current.srcObject = stream;
            this.setState({videoStream: stream})
        } catch(err) {
            alert(err.message);
            console.log('erro :>> ', err)
        }
    }
    render() {
        return (
            <video id="video" ref={this.videoRef} className={styles.video} autoPlay muted></video>
        )
    }
}
