import React from 'react';
import Banner from '../components/Banner/Banner';
import BannerBottom from '../components/BannerBottom/BannerBottom';
import CompanyOverview from '../components/CompanyOverview/CompanyOverview';



const Home = () => {
    return (
        <div>
            {/* <h1>Home Page</h1> */}
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <CompanyOverview></CompanyOverview>
            
        </div>
    );
};

export default Home;