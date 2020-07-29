import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './styles.scss';
import getStatsCountry from '../../services/Coronavirus';
import Container from '@material-ui/core/Container';
import Cards from '../../components/cards';
import LoaderPage from '../../components/LoaderPage';
import { Alert } from '@material-ui/lab';

export default class Coronavirus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            countriesFilter: [],
            searchCountry: null,
            isLoading: false,
            error: null
        }
    }
    filterCountries = (countrySelected) => {
        this.setState({countriesFilter: this.state.countries})
        if (countrySelected) {
            const filter = this.state.countries.filter(country => {
                return country.Country.includes(countrySelected)
            });
            this.setState({countriesFilter: filter});
        }
    }

    handleChange = (event) => {
        this.setState({searchCountry: event.target.value}, () => this.filterCountries(this.state.searchCountry));
    }

    async componentDidMount() {
        try {
            this.setState({isLoading: true});
            const data = await getStatsCountry();
            this.setState({
                countries: data,
                countriesFilter: data,
                error: null,
                isLoading: false
            });
        } catch ({message}) {
            this.setState({
                error: message,
                isLoading: false,
                countries: [],
                countriesFilter: []
            })
        } finally {

        }

    }
    render() {
        const {error, isLoading, countriesFilter} = this.state
        return (
            <Container maxWidth="lg">
                <LoaderPage isLoading={isLoading} />
                <div className={"search"} >
                    <TextField label="Buscar país" onChange={this.handleChange} />
                </div>
                {error ? <Alert severity="error">{error}</Alert> : <></>}
                <Cards countries={countriesFilter}/>
            </Container>
        )
    }
}
