import {
   
    Card,
    Container,
    ImageList,
    ImageListItem,
    ImageListItemBar,
  
  } from '@mui/material';
  import ChildrenImageData from './ChildrenImageData';
  //import { useValue } from '../../context/ContextProvider';
 
  
  const AlbumChildren = () => {
   
    return (
      <Container>
        <ImageList
          gap={12}
          sx={{
            mb: 8,
            gridTemplateColumns:
              'repeat(auto-fill, minmax(280px, 1fr))!important',
          }}
        >
          {ChildrenImageData.map((child) => (
            <Card key={child.id}>
              <ImageListItem sx={{ height: '100% !important' }}>
                <ImageListItemBar
                  sx={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)',
                  }}
                 
                  
                  position="top"
                />
                <img
                  src={child.img}
                  alt={child.title}
                  loading="lazy"
                  style={{ cursor: 'pointer' }}
                />
               
               
              </ImageListItem>
            </Card>
          ))}
        </ImageList>
      </Container>
    );
  };
  
  export default AlbumChildren;