import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './styles.scss';
import getStatsCountry from '../../services/Coronavirus';
import Container from '@material-ui/core/Container';
import Cards from '../../components/cards';

export default class Coronavirus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            countriesFilter: [],
            searchCountry: null
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
        const data = await getStatsCountry();
        this.setState({
            countries: data,
            countriesFilter: data
        });
    }
    render() {
        return (

            <Container maxWidth="lg">
                <div className={"search"} >
                    <TextField label="Buscar país" onChange={this.handleChange} />
                </div>
                <Cards countries={this.state.countriesFilter}/>
            </Container>
        )
    }
}
