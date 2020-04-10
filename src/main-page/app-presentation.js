import React from 'react';
import SearchResults from '../search-results';
import HouseDetail from '../house';
import FeaturedHouse from './featured-house';
import Header from './header';
import HouseFilter from './house-filter';

const AppPresentation = (props) => {
    let activeComponent = null;
    if (props.country) {
        activeComponent = (
            <SearchResults
                filteredHouse={props.filteredHouses}
                setActiveHouse={props.setActiveHouse}
            />
        );
    }
    if (props.activeHouse) {
        activeComponent = <HouseDetail house={props.activeHouse} />;
    }
    if (!activeComponent) {
        activeComponent = <FeaturedHouse house={props.featuredHouse} />;
    }

    return (
        <div className="container">
            <Header subtitle="Providing houses world wide" />
            <HouseFilter
                countries={props.countries}
                filterHouse={props.filterHouse}
            />
            {activeComponent}
        </div>
    );
};

export default AppPresentation;
