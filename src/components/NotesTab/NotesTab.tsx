import React from 'react';
import { Note } from '../../components';
import { Grid } from '@material-ui/core';
import { NoteContentInterface } from '../../data';

export default (props: NotesTabProps) => {
  const { notesContent } = props;

  const renderNotes = (notesContent: any[]) => {
    debugger;
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
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        padding: '5px',
        maxHeight: '54vh',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}>
      {renderNotes(notesContent)}
    </Grid>
  );
};

interface NotesTabProps {
  notesContent: NoteContentInterface[];
}
