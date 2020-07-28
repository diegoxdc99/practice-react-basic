import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import styles from './styles.module.scss';

export default class DetailCountry extends Component {
    render() {
        const {country} = this.props.location.state;
        const {Country, TotalConfirmed, TotalDeaths, TotalRecovered} = country;
        return (
            <Container className={styles.container} maxWidth="lg">
                <Paper className={styles.card} elevation={3}>
                    <div><b>Nombre: </b></div><div>{Country}</div>
                    <div><b>Total confirmados: </b></div><div>{TotalConfirmed}</div>
                    <div><b>Total muertos :( </b></div><div>{TotalDeaths}</div>
                    <div><b>Total recuperados :)</b></div><div>{TotalRecovered}</div>

                </Paper>

            </Container>
        )
    }
}
