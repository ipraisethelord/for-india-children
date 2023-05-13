import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import data from "../../assets/data/data.json";
import { Link } from "react-router-dom";
export default function AlbumCategory() {
  return (
    <>
      {/* End hero unit */}
      <Box sx={{ width: "100%" , display: 'flex',  justifyContent: 'center',  alignItems: 'center',}}>
        <Stack spacing={2}>
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
             School Building Project
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>

          <Container>
            <Grid container spacing={4}>
              {data.map((category) => (
                <Grid item key={category.id} xs={12} sm={6} md={3}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: "4%"
                      }}
                      image={category.image}
                      alt={category.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {category.name}
                      </Typography>
                      <Typography>Total cost: {category.total}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" key={category.name} component={Link}  to={'/Category/id:'+ category.name}>View</Button>
                     
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Stack>
      </Box>
    </>
  );
}
