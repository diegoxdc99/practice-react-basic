import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import './styles.scss';
import getStatsCountry from '../../services/Coronavirus';
import Container from '@material-ui/core/Container';
import Cards from '../../components/cards';

export default class Coronavirus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }

    async componentDidMount() {
        const data = await getStatsCountry();
        this.setState({countries: data});
    }
    render() {
        return (
            <Container maxWidth="lg">
                <Cards countries={this.state.countries}/>
            </Container>
        )
    }
}
