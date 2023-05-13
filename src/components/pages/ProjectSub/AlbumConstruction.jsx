import {
   
    Card,
    Container,
    ImageList,
    ImageListItem,
    ImageListItemBar,
  
  } from '@mui/material';
  import ConstructionImageList from '../../reusable/ConstructionImageList';
    
  const AlbumConstruction = () => {
   
    return (
      <Container>
        <ImageList
          gap={30}
          sx={{
            mb: 8,
            gridTemplateColumns:
              'repeat(auto-fill, minmax(280px, 1fr))!important',
          }}
        >
          {ConstructionImageList.map((child) => (
            <Card key={child.title}>
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
  
  export default AlbumConstruction;