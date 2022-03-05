import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Project from '../Project/Project';
import TopBanner from '../Topbanner/TopBanner';

const Home = () => {
    return (
        <div>
           
            <TopBanner/> 
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;