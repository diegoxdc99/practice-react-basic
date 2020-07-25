import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import './styles.scss';
import getStatsCountry from '../../services/Coronavirus';
import Container from '@material-ui/core/Container';

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
            <div className="container">
                {this.state.countries.map((country => {
                    return (
                        <Paper className="card" elevation={1}>
                            <div className="card-title">{country.Country}</div>
                            <div className="card-subtitle"><b>Nuevos:</b> {country.NewConfirmed}</div>
                            <div className="card-subtitle"><b>Total:</b> {country.TotalRecovered}</div>
                        </Paper>
                    )
                }))}


            </div>
            </Container>
        )
    }
}
