import React, { Component } from 'react';
import styles from './camera.module.scss';
import * as faceapi from 'face-api.js';

export default class Camera extends Component {
  streamVideo = null;
  videoRef = React.createRef();
  containerRef = React.createRef();
  predictedAges = [];
  interval;

  constructor(props) {
    super(props);
    this.state = {
      videoStream: null,
    };
  }
  loadModels = () => {
    return Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models'),
      faceapi.nets.ageGenderNet.loadFromUri('/models'),
    ]);
  };

  startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      this.videoRef.current.srcObject = stream;
      this.setState({ videoStream: stream });
    } catch (err) {
      console.log('erro :>> ', err);
    }
  };

  interpolateAgePredictions = (age) => {
    this.predictedAges = [age].concat(this.predictedAges).slice(0, 30);
    const avgPredictedAge =
      this.predictedAges.reduce((total, a) => total + a) /
      this.predictedAges.length;
    return avgPredictedAge;
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  registerStartEvent = () => {
    this.videoRef.current.addEventListener('playing', () => {
      const video = this.videoRef.current;
      const canvas = faceapi.createCanvasFromMedia(video);
      this.containerRef.current.append(canvas);
      //   document.body.append(canvas);
      const displaySize = { width: video.offsetWidth, height: video.offsetHeight };
      faceapi.matchDimensions(canvas, displaySize);

      this.interval = setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions()
          .withAgeAndGender();
        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );

        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
            // alert(JSON.stringify(detections))
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        if (resizedDetections[0]) {
          const age = resizedDetections[0].age;
          const interpolatedAge = this.interpolateAgePredictions(age);
          const bottomRight = {
            x: resizedDetections[0].detection.box.bottomRight.x - 50,
            y: resizedDetections[0].detection.box.bottomRight.y,
          };

          new faceapi.draw.DrawTextField(
            [`${faceapi.utils.round(interpolatedAge, 0)} years`],
            bottomRight
          ).draw(canvas);
        }
      }, 100);
    });
  };

  async componentDidMount() {
    await this.loadModels();
    await this.startVideo();
    await this.registerStartEvent();
  }
  render() {
    return (

      <div ref={this.containerRef} className={styles.container}>
        Esto va a reconocer el estado del animo y cuantos años tienes (bueno esa es la idea)
        <video
          id='video'
          ref={this.videoRef}
          className={styles.video}
          autoPlay
          muted
        ></video>
      </div>
    );
  }
}
