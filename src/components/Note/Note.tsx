import React from 'react';
import { Card, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NoteContentInterface } from '../../data';

export default (props: NoteProps) => {
  const { noteContent } = props;
  const classes = useStyles()();

  return (
    <Card classes={{ root: classes.card }}>
      <Grid container>
        <Grid item style={{ width: '100%' }}>
          <Typography align="left">{noteContent.content}</Typography>
        </Grid>
        <Grid item style={{ width: '100%' }}>
          <Typography align="right">{noteContent.signature}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

interface NoteProps {
  noteContent: NoteContentInterface;
}

const useStyles = () =>
  makeStyles(() => {
    return {
      card: {
        minHeight: '100px',
        padding: '15px',
      },
    };
  });
