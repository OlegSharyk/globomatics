import React, { Component } from 'react';
import './main-page.css';
import AppPresentation from './app-presentation';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    state = {
        hasError: false,
    };

    componentDidMount() {
        this.fetchHouses();
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: error });
        console.log(error, info);
    }

    fetchHouses = () => {
        fetch('/houses.json')
            .then((rsp) => rsp.json())
            .then((allHouses) => {
                this.allHouses = allHouses;
                this.determineFeatureHouse();
                this.determineUniqueCountries();
            });
    };

    determineFeatureHouse = () => {
        if (this.allHouses) {
            const randomIndex = Math.floor(
                Math.random() * this.allHouses.length,
            );
            const featuredHouse = this.allHouses[randomIndex];
            this.setState({ featuredHouse });
        }
    };

    determineUniqueCountries = () => {
        const countries = this.allHouses
            ? Array.from(new Set(this.allHouses.map((h) => h.country)))
            : [];
        countries.unshift(null);
        this.setState({ countries });
    };

    filterHouse = (country) => {
        this.setState({ activeHouse: null });
        const filteredHouses = this.allHouses.filter(
            (h) => h.country === country,
        );

        this.setState({ filteredHouses });
        this.setState({ country });
    };

    setActiveHouse = (house) => {
        this.setState({ activeHouse: house });
    };

    render() {
        if (this.state.hasError) {
            return <h1>Whoops! Sorry!</h1>;
        }

        const {
            country,
            filteredHouses,
            featuredHouse,
            countries,
            activeHouse,
        } = this.state;

        return (
            <AppPresentation
                country={country}
                filteredHouses={filteredHouses}
                countries={countries}
                featuredHouse={featuredHouse}
                activeHouse={activeHouse}
                filterHouse={this.filterHouse}
                setActiveHouse={this.setActiveHouse}
            />
        );
    }
}

export default App;
