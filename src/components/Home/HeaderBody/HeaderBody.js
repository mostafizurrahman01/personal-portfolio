import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Mypic from '../../../images/Mypic.png';
import './HeaderBody.css';

const HeaderBody = () => {
    return (
        <Grid container className="section mb-5">
            <Grid item xs={12} md={6}>
                <Grid item className="section-title mt-3 ms-5">
                    <span></span>
                    <Typography variant="h4" className="name_text">Hi there, I am MD.<br/> Mostafizur Rahman</Typography>
                </Grid>
                <Grid item xs={12} className="mt-3 ms-5 section-text">
                    <Typography className="aboutMe_text">Innovative Front end web developer with new experience building and maintaining <br /> responsive websites in the enlisting company.  Expert with HTML, CSS, JavaScript <br /> plus modern libraries and framework. Passionate about competitive programming knowledge <br /> of C++, java language.</Typography>
                </Grid>
                <Grid item xs={12} className="mt-3 ">
                    <Link to="/about" className="btn-section">
                        <Button className="btn-section">
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                            <span className="text-info text-section">Explore More</span></Button>
                    </Link>
                </Grid>

            </Grid>
            <Grid item xs={12} md={6} >
                <img className="img-modify" alt="complex" src={Mypic} />
            </Grid>


        </Grid>
    );
};

export default HeaderBody;