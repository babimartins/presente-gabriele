import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import { Tabs, NotesTab } from './components';
import { getNotesContent } from './data';

function App() {
  return (
    <Grid container className="App">
      <Grid item style={{ height: '25vh', width: '100%', marginBottom: '2vh' }}>
        <div>placeholder</div>
      </Grid>
      <Grid item style={{ height: '60vh', width: '100%' }}>
        <Tabs
          tabsContent={[<div />, <NotesTab notesContent={getNotesContent()} />, <div />]}
          tabsLabels={['Texto', 'Recados', 'Fotos']}
        />
      </Grid>
    </Grid>
  );
}

export default App;
