import React, { Component } from 'react'
import './styles.scss';
import Container from '@material-ui/core/Container';
import Camera from '../../components/Camera';

export default class FaceRecognition extends Component {
    render() {
        return (
            <Container maxWidth="lg">
                <Camera />
            </Container>
        )
    }
}
