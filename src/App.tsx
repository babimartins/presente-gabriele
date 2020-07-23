import React from 'react';
import './App.css';
import { Tabs, NotesTab } from './components';
import { getNotesContent, getPhotosContent } from './data';
import { Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

function App() {
  const headerImage = require('./images/header.png');

  var items = [];
  const photos = getPhotosContent();

  for (let i = 0; i < photos.length; i += 3) {
    items.push({ a: photos[i], b: photos[i + 1], c: photos[i + 2] });
  }

  function Item(props: any) {
    const imgA = require(`./images/photos/${props.item.a.path.toString()}`);
    const imgB = require(`./images/photos/${props.item.b.path.toString()}`);
    const imgC = require(`./images/photos/${props.item.c.path.toString()}`);
    return (
      <Grid container spacing={1} style={{ minHeight: '50vh' }}>
        <Grid item xs={4}>
          <img src={imgA} alt={props.item.a.path.replace('.jpg', '')} style={{ maxHeight: '45vh' }} />
        </Grid>
        <Grid item xs={4}>
          <img src={imgB} alt={props.item.b.path.replace('.jpg', '')} style={{ maxHeight: '45vh' }} />
        </Grid>
        <Grid item xs={4}>
          <img src={imgC} alt={props.item.c.path.replace('.jpg', '')} style={{ maxHeight: '45vh' }} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container className="App">
      <Grid item style={{ maxHeight: '25vh', width: '100%', marginBottom: '2vh' }}>
        <img id="header-image" src={headerImage} alt="Header" style={{ height: '22.5vh' }} />
      </Grid>
      <Grid item style={{ height: '65vh', width: '100%' }}>
        <Tabs
          tabsContent={[
            <div />,
            <NotesTab notesContent={getNotesContent()} />,
            <Carousel
              indicatorProps={{ className: '', style: { padding: '10px' } }}
              activeIndicatorProps={{ className: '', style: { padding: '10px' } }}>
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>,
          ]}
          tabsLabels={['A Gabi é música', 'Recadinhos', 'Fotinhas']}
        />
      </Grid>
    </Grid>
  );
}

export default App;
