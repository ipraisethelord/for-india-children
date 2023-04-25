import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ChildrenImageData from './ChildrenImageData';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from "@mui/material/Container";
export default function ChildrenImageList() {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Container maxWidth={false}>
    <ImageList sx={{ width: 800, height: 610 }} cols={matches ? 4: 2} rowHeight={200} spacing={8}>
      {ChildrenImageData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
            srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Container>
  );
}

