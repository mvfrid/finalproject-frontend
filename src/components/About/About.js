/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AboutCards } from './AboutCards';
import './About.css'
import * as styles from './StyledAboutCards'

export const About = ({ onPageChange }) => {
  useEffect(() => {
    onPageChange('about');
  }, []);

  return (
    <div className="about-container">
      <Card sx={styles.StyledAboutCards}>
        <CardContent>
          <Typography
            sx={{ mb: 1 }}
            variant="h5"
            component="h2"
            color="#446173">
          About
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            variant="body2"
            component="h3"
            color="#446173">
          This fullstack application, created for Technigo&apos;s Spring 2023 Web Development Bootcamp, enables users to utilize a Google API to search and curate lists of destinations for various trips.
          </Typography>
          <Typography
            sx={{ mb: 1.5, mt: 1 }}
            variant="body2"
            component="h3"
            color="#446173">
          Users are also able to save their favorite locations within these lists, further personalizing their trip planning process.
          </Typography>
          <Typography
            sx={{ mb: 0, mt: 1 }}
            variant="body2"
            component="h3"
            color="#446173">
          An added review feature allows users to record and revisit their experiences at these saved destinations, enriching their engagement with the platform.
          </Typography>
        </CardContent>
      </Card>

      <AboutCards
        title="Camilla"
        image="https://i.postimg.cc/YShyP8KJ/img-0031-720.jpg"
        linkLinked="https://www.linkedin.com/in/camilla-cronqvist/"
        linkGit="https://github.com/camcron"
        linkPortfolio="https://portfolio-camilla-cronqvist.netlify.app/" />

      <AboutCards
        title="Matilda"
        image="https://i.postimg.cc/J4xV4cHM/Mr-YF6d-Wa9-Ec-P7bqm17-Dr-Pw7m-Tgp5-Cx-250-kopia.png"
        linkLinked="https://www.linkedin.com/in/matilda-frid-7923bb88/"
        linkGit="https://github.com/mvfrid"
        linkPortfolio="https://matilda-frid-portfolio.netlify.app/" />

      <Card sx={styles.StyledAboutCards}>
        <CardContent>
          <Typography sx={{ mb: 1 }} variant="h5" component="h2" color="#446173">
          Resources & Tech Stack
          </Typography>
          <Typography sx={{ mb: 0 }} variant="body2" component="h3" color="#446173">
          Google Place API °
          Google Geocode API °
          Google Cloud °
          Netlify °
          JavaScript °
          React °
          Redux °
          Node.js °
          Express °
          MongoDB °
          Material UI °
          Formik
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}