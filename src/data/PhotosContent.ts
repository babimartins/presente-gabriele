export interface PhotosContentInterface {
  path: string;
}

export default () => {
  const photosContent: PhotosContentInterface[] = [];
  for (let i = 1; i <= 63; i++) {
    photosContent.push({ path: `${i}.jpg` });
  }
  return photosContent;
};
