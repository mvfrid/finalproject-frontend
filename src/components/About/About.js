/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AboutCards } from './AboutCards';
import './About.css'
import * as styles from './StyledAbout'
import { useTheme } from '../../Providers'

export const About = ({ onPageChange }) => {
  const theme = useTheme()

  useEffect(() => {
    onPageChange('about'); // Invoke onPageChange with the current page information
    console.log({ theme })
  }, []);

  return (
    <div className="about-container">
      <Card sx={styles.StyledAboutCards}>
        <CardContent>
          <Typography variant="h5" component="div">
          About Us
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </CardContent>
      </Card>

      <AboutCards
        title="Camilla"
        text="Camilla is lorem ipsum lorem ipsum lorem ipsum"
        image=""
        linkLinked="https://www.linkedin.com/in/camilla-cronqvist/"
        linkGit="https://github.com/camcron"
        linkPortfolio="https://portfolio-camilla-cronqvist.netlify.app/" />

      <AboutCards
        title="Matilda"
        text="Matilda is lorem ipsum lorem ipsum lorem ipsum"
        image=""
        linkLinked="https://www.linkedin.com/in/matilda-frid-7923bb88/"
        linkGit="https://github.com/mvfrid"
        linkPortfolio="https://matilda-frid-portfolio.netlify.app/" />

      <Card sx={styles.StyledAboutCards}>
        <CardContent>
          <Typography variant="h5" component="div">
          Resources
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}