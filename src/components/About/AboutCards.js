/* eslint-disable linebreak-style */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import { IconButton, Stack } from '@mui/material';
import * as styles from './StyledAboutCards'

export const AboutCards = ({ title, image, linkLinked, linkGit, linkPortfolio }) => {
  return (
    <Card sx={styles.StyledAboutUsCards}>
      <img
        src={image}
        className="photo-circle"
        alt={`${title}'s Portrait`} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          color="#446173"
          component="h2">
          {title}
        </Typography>
      </CardContent>

      <Stack alignItems="center">
        <CardActions>

          <IconButton
            href={linkLinked}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${title}'s LinkedIn`}>
            <LinkedInIcon sx={{ color: '#495057' }} />
          </IconButton>

          <IconButton
            href={linkGit}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${title}'s Github`}>
            <GitHubIcon sx={{ color: '#495057' }} />
          </IconButton>

          <IconButton
            href={linkPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${title}'s portfolio`}>
            <WorkIcon sx={{ color: '#495057' }} />
          </IconButton>

        </CardActions>
      </Stack>
    </Card>
  );
}
