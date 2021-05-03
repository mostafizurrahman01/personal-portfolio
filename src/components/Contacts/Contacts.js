import React from 'react';
import Contact from '../Shared/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="">
            <Navbar className="navbar-container"></Navbar>
            <div className="contact-container">
                <h4 className="text-center text-primary">Welcom to Contact Page</h4>
                <Contact ></Contact>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Contacts;