import React from 'react';
import { Note } from '../../components';
import { NoteContentInterface } from '../../data';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default (props: NotesTabProps) => {
  const { notesContent } = props;
  const classes = useStyles()();

  const renderNotes = (notesContent: any[]) => {
    return notesContent.map(noteContent => {
      return (
        <Grid item xs={4}>
          <Note noteContent={noteContent} />
        </Grid>
      );
    });
  };

  return (
    <Grid
      id="notes-tab-container"
      container
      spacing={2}
      direction="row"
      alignItems="center"
      classes={{ root: classes.container }}>
      {renderNotes(notesContent)}
    </Grid>
  );
};

interface NotesTabProps {
  notesContent: NoteContentInterface[];
}

const useStyles = () =>
  makeStyles(() => {
    return {
      container: {
        padding: '10px 0 5px 10px',
        maxHeight: '54vh',
        overflowY: 'auto',
        overflowX: 'hidden',
      },
    };
  });
