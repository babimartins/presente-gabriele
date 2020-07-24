import React from 'react';
import './App.css';
import { Tabs, NotesTab, PhotosTab, MusicsTab } from './components';
import { getNotesContent, getPhotosContent, getMusicsContent } from './data';
import { Grid } from '@material-ui/core';

function App() {
  const headerImage = require('./images/header.png');

  return (
    <Grid container className="App">
      <Grid item style={{ maxHeight: '25vh', width: '100%', marginBottom: '3vh' }}>
        <img id="header-image" src={headerImage} alt="Header" style={{ height: '22.5vh' }} />
      </Grid>
      <Grid item style={{ height: '67vh', width: '100%' }}>
        <Tabs
          tabsContent={[
            <MusicsTab musics={getMusicsContent()} />,
            <NotesTab notesContent={getNotesContent()} />,
            <PhotosTab photos={getPhotosContent()} />,
          ]}
          tabsLabels={['A Gabi é música', 'Recadinhos', 'Fotinhas']}
        />
      </Grid>
    </Grid>
  );
}

export default App;
