import React from 'react';
import { PhotosContentInterface } from '../../data';
import { Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

export default (props: PhotosTabProps) => {
  const { photos } = props;

  var photosContent: any[] = [];
  for (let i = 0; i < photos.length; i += 3) {
    photosContent.push({ a: photos[i], b: photos[i + 1], c: photos[i + 2] });
  }

  const renderPhotos = (items: any[]) => {
    return items.map((item, i) => {
      return <Item key={i} item={item} />;
    });
  };

  function Item(props: any) {
    const imgA = require(`../../images/photos/${props.item.a.path.toString()}`);
    const imgB = require(`../../images/photos/${props.item.b.path.toString()}`);
    const imgC = require(`../../images/photos/${props.item.c.path.toString()}`);
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
    <Carousel
      indicatorProps={{ className: '', style: { padding: '10px' } }}
      activeIndicatorProps={{ className: '', style: { padding: '10px' } }}>
      {renderPhotos(photosContent)}
    </Carousel>
  );
};

interface PhotosTabProps {
  photos: PhotosContentInterface[];
}
