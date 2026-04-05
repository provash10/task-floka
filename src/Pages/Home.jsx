import React from 'react';
import Banner from '../components/Banner/Banner';
import BannerBottom from '../components/BannerBottom/BannerBottom';
import CompanyOverview from '../components/CompanyOverview/CompanyOverview';
import LatestTitle from '../components/LatestTitle/LatestTitle';
import PortfoCard from '../components/PortfoCard/PortfoCard';






const Home = () => {
    return (
        <div>
            {/* <h1>Home Page</h1> */}
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <CompanyOverview></CompanyOverview>
             <LatestTitle />
             <PortfoCard></PortfoCard>
        </div>
    );
};

export default Home;
