import React from 'react';
import Contact from '../../Shared/Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import ProjectSection from '../ProjectSection/ProjectSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProjectSection></ProjectSection>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;