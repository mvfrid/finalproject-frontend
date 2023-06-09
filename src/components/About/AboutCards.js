import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import './AboutCards.css'
import { IconButton, Stack } from '@mui/material';

export const AboutCards = ({ title, text, linkLinked, linkGit, linkPortfolio }) => {
  return (
    <Card sx={{ minWidth: 250, maxWidth: 345, my: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        // image=""
        title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>

      <Stack alignItems="center">
        <CardActions>

          <IconButton href={linkLinked} target="_blank">
            <LinkedInIcon sx={{ color: '#495057' }} />
          </IconButton>

          <IconButton href={linkGit} target="_blank">
            <GitHubIcon sx={{ color: '#495057' }} />
          </IconButton>

          <IconButton href={linkPortfolio} target="_blank">
            <WorkIcon sx={{ color: '#495057' }} />
          </IconButton>

        </CardActions>
      </Stack>
    </Card>
  );
}