import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ChildrenImageData from './ChildrenImageData';


export default function ChildrenImageList() {
  return (
    <ImageList sx={{ width: 800, height: 800 }} cols={4} rowHeight={164}>
      {ChildrenImageData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

// const itemData = [
//   {
//     img: {ChildrenImageData},
//     title: 'Breakfast',
//   },
//   {
//     img: {img2},
//     title: 'Burger',
//   },
//   {
//     img: {img3},
//     title: 'Camera',
//   },
//   {
//     img: {img4},
//     title: 'Coffee',
//   },
//   {
//     img: {img5},
//     title: 'Hats',
//   },
//   {
//     img: {img5},
//     title: 'Honey',
//   },
//   {
//     img: {img6},
//     title: 'Basketball',
//   },
//   {
//     img: {img7},
//     title: 'Fern',
//   },
//   {
//     img: {img8},
//     title: 'Mushrooms',
//   },
//   {
//     img: {img9},
//     title: 'Tomato basil',
//   },
//   {
//     img: {img10},
//     title: 'Sea star',
//   },
 
// ];
