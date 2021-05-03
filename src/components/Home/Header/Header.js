import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import HeaderBody from '../HeaderBody/HeaderBody';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <HeaderBody></HeaderBody>

        </div>
    );
};

export default Header;