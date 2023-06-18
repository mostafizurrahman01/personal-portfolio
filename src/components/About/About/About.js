import { faAngleDoubleRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ResumeData from '../../../FakeData/ResumeData';
import WorkIcon from '@material-ui/icons/Work';
import Mypic from '../../../images/Mypic.png';
import CustomTimeline from '../../Resume/Timeline/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Navbar from '../../Shared/Navbar/Navbar';
import './About.css';
import Contact from '../../Shared/Contact/Contact';
import Footer from '../../Shared/Footer/Footer';

const About = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Grid container className="section mb-5">

          <Grid item xs={12} md={6}>
            <CustomTimeline
              title="My Identity"
              icon={<WorkIcon />} >
              {ResumeData.owner.map(info => (
                <TimelineItem>
                  <TimelineSeparator className={"separator_padding"}>
                    <TimelineDot variant={'outlined'} className={"timeline_dot"} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="timeline_content">
                    <Typography className="timeline_title">{info.name}</Typography>
                    <Typography variant='caption' className="timeline_date">{info.birthday}</Typography>
                    <br />
                    <Typography variant='caption' className="timeline_date">{info.email}</Typography>
                    <br />
                    <Typography variant='caption' className="timeline_date">{info.phone}</Typography>
                    <br />
                    <Typography variant='body2' className="timeline_experience">{info.address}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
            <Grid item xs={12} className="mt-3 ms-5 section-text">
              <Grid item className="mt-3 ms-5 section-text">
                <Typography className="aboutMe_text ms-3">Innovative Front end web developer with new experience building and maintaining <br /> responsive websites in the enlisting company.  Expert with HTML, CSS, JavaScript <br /> plus modern libraries and framework. Passionate about competitive programming knowledge <br /> of C++, java language.</Typography>
              </Grid>
              <Grid item className="section_title mb_30 mt-5 ms-5">
                <span></span>
                <h6 className="section_text">My Skill</h6>
              </Grid>
              <Grid
                container
                spacing={3}
                justify='space-between'
                className="section graybg pb_45 p_50 mt-3">
                {
                  ResumeData.skills.map(skill => (
                    <Grid item xs={12} sm={6} md={3}>
                      <Paper elevation={0} className="skill2">
                        <Typography variant="h6" className="skill_title">{skill.title}</Typography>
                        {skill.description.map((element) => (
                          <Typography variant='body2' className='skill_description'>
                            <TimelineDot variant={'outlined'} className="timeline_dot" />
                            {element}
                          </Typography>
                        ))}
                      </Paper>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
            <Grid item xs={12} className="mt-3 ms-5" spacing={3} justify='space-evenly'>
              <a href="https://drive.google.com/file/d/1xEornfP5ozKNC7uwqOcwrmsqD9OED3is/view?usp=sharing" className="btn-main" >
                <FontAwesomeIcon icon={faDownload} />
                <Button >Get Resume</Button>
              </a>
            </Grid>

          </Grid>
          <Grid item xs={12} md={6} >
            <img className="img-modify" alt="complex" src={Mypic} />
          </Grid>
        </Grid>
      </div>

      <div>
        <Contact></Contact>
        <Footer />
      </div>
    </div>

  );
};

export default About;
