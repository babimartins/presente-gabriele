export interface PhotosContentInterface {
  path: string;
}

export default () => {
  const photosContent: PhotosContentInterface[] = [];
  for (let i = 1; i <= 63; i++) {
    photosContent.push({ path: `${i}.jpg` });
  }
  let indice = photosContent.length;
  while (indice) {
    const indiceAleatorio = Math.floor(Math.random() * indice--);
    [photosContent[indice], photosContent[indiceAleatorio]] = [photosContent[indiceAleatorio], photosContent[indice]];
  }
  return photosContent;
};
