import { Button, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Mypic from '../../../images/Mypic.png';
import Navbar from '../../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import CustomTimeline from '../Timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import './Resume.css';
import ResumeData from '../../../FakeData/ResumeData';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Contact from '../../Shared/Contact/Contact';
import Footer from '../../Shared/Footer/Footer';

const Resume = () => {
    return ( <
        div >
        <
        div >
        <
        Navbar > < /Navbar> <
        /div>

        <
        > { /* about me */ } <
        Grid container className = "section" >
        <
        Grid item xs = { 12 }
        md = { 6 } >
        <
        Grid item className = "section-title mt-3 ms-5" >
        <
        span > < /span> <
        Typography variant = "h4" > About me < /Typography> <
        /Grid> <
        Grid item xs = { 12 }
        className = "mt-3 ms-5 section-text" >
        <
        Typography className = "aboutMe_text" > Innovative Front end web developer with new experience building and maintaining < br / > responsive websites in the enlisting company.Expert with HTML, CSS, JavaScript < br / > plus modern libraries and framework.Passionate about competitive programming knowledge < br / > of C++, java language. < /Typography> <
        /Grid> <
        Grid item xs = { 12 }
        className = "mt-3 " >
        <
        Link to = "/about"
        className = "btn-section" >
        <
        Button className = "btn-section" >
        <
        FontAwesomeIcon icon = { faAngleDoubleRight }
        /> <
        span className = "text-info text-section" > Explore More < /span></Button >
        <
        /Link> <
        /Grid>

        <
        /Grid> <
        Grid item xs = { 12 }
        md = { 6 } >
        <
        img className = "img-modify"
        alt = "complex"
        src = { Mypic }
        /> <
        /Grid>


        <
        /Grid>


        { /* education && experience */ } <
        Grid container className = "section" >
        <
        Grid item className = "section-title mt-3 ms-5" >
        <
        span > < /span> <
        h4 className = "section_title_text" > Resume < /h4> <
        /Grid> <
        Grid item xs = { 12 } >
        <
        Grid container className = "resume_timeline" >
        <
        Grid item sm = { 12 }
        xs = { 12 }
        md = { 6 } >
        <
        CustomTimeline title = "Work Experience"
        icon = { < WorkIcon / > } > {
            ResumeData.experiences.map((experience) => ( <
                TimelineItem >
                <
                TimelineSeparator className = { "separator_padding" } >
                <
                TimelineDot variant = { 'outlined' }
                className = { "timeline_dot" }
                /> <
                TimelineConnector / >
                <
                /TimelineSeparator> <
                TimelineContent className = "timeline_content" >
                <
                Typography className = "timeline_title" > { experience.title } < /Typography> <
                Typography variant = 'caption'
                className = "timeline_date" > { experience.date } < /Typography> <
                Typography variant = 'body2'
                className = "timeline_experience" > { experience.description } < /Typography> <
                /TimelineContent> <
                /TimelineItem>
            ))
        } <
        /CustomTimeline> <
        /Grid>

        <
        Grid item sm = { 12 }
        xs = { 12 }
        md = { 6 } >
        <
        CustomTimeline title = "Education History"
        icon = { < SchoolIcon / > } > {
            ResumeData.education.map((education) => ( <
                TimelineItem >
                <
                TimelineSeparator className = { "separator_padding" } >
                <
                TimelineDot variant = { 'outlined' }
                className = { "timeline_dot" }
                /> <
                TimelineConnector / >
                <
                /TimelineSeparator> <
                TimelineContent className = "timeline_content" >
                <
                Typography className = "timeline_title" > { education.title } < /Typography> <
                Typography variant = 'caption'
                className = "timeline_date" > { education.description } < /Typography> <
                Typography variant = 'body2'
                className = "timeline_experience" > { education.date } < /Typography> <
                /TimelineContent> <
                /TimelineItem>
            ))
        } <
        /CustomTimeline> <
        /Grid> <
        /Grid> <
        /Grid> <
        /Grid>

        { /* services */ } <
        Grid container className = "section" >
        <
        Grid item className = "section_title mb_30 mt-3 ms-5" >
        <
        span > < /span> <
        h4 className = "section_title_text" > My Projects < /h4> <
        /Grid> <
        Grid item xs = { 12 }
        className = "ms-5 mt-5" >
        <
        Grid container spacing = { 3 }
        justify = 'space-around' > {
            ResumeData.projects.map(project => ( <
                Grid item sm = { 6 }
                xs = { 12 }
                md = { 3 } >
                <
                div className = "project" >
                <
                img className = "project_img"
                src = { project.img }
                alt = "" / >
                <
                Typography className = "project_title"
                variant = 'h6' > { project.title } < /Typography> <
                Typography className = "project_details"
                variant = 'body2' > { project.details } < /Typography> <
                a href = { project.url }
                target = 'blank' >
                <
                FontAwesomeIcon icon = { project.live }
                /> <
                /a> <
                /div> <
                /Grid>
            ))
        } <
        /Grid> <
        /Grid> <
        /Grid>

        { /* skills */ } <
        Grid item className = "section_title mb_30 mt-5 ms-5" >
        <
        span > < /span> <
        h4 className = "section_title_text" > Skills < /h4> <
        /Grid> <
        Grid container spacing = { 3 }
        justify = 'space-between'
        className = "section graybg pb_45 p_50 mt-3" > {
            ResumeData.skills.map(skill => ( <
                Grid item xs = { 12 }
                sm = { 6 }
                md = { 3 } >
                <
                Paper elevation = { 0 }
                className = "skill" >
                <
                Typography variant = "h6"
                className = "skill_title" > { skill.title } < /Typography> {
                    skill.description.map((element) => ( <
                        Typography variant = 'body2'
                        className = 'skill_description' >
                        <
                        TimelineDot variant = { 'outlined' }
                        className = "timeline_dot" / > { element } <
                        /Typography>
                    ))
                } <
                /Paper> <
                /Grid>
            ))
        } <
        /Grid>

        { /* contact */ } <
        Grid className = "section" >
        <
        Contact > < /Contact> <
        Footer / >
        <
        /Grid>

        <
        /> <
        /div>
    );
};

export default Resume;