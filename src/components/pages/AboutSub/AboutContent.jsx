import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from 'react';
function AboutContent() {
 
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  
  let boxPadding = 2; 
  if (isMediumScreen) {
   
    boxPadding = 4;   
  }

  if (isLargeScreen) {
   
    boxPadding = 5;
   
  }

  return (
    <Box padding={boxPadding}>
      <Typography gutterBottom>
        Welcome to our website, dedicated to raising funds to complete the
        construction of the Baptist Academy Group of Schools in Coimbatore,
        India. We aim to create a self-sustaining educational institution that
        provides a quality education for generations to come.
      </Typography>
      &nbsp;
      <Typography gutterBottom>
        The Baptist Academy Group of Schools was founded by Dr. P. D. Cherian in
        1994, following the establishment of the South India Baptist Bible College and
        Seminary (SIBBC&S). With over 20 acres of land and an additional 10 acres
        for expansion, the SIBBC&S has enough space to host multiple schools. Dr.
        Cherian saw the need for a quality, well-rounded secondary education for
        children in Coimbatore and established the Baptist Academy Group of
        Schools, which includes a CBSE school and a Matriculation Higher
        Secondary School.
      </Typography>
      &nbsp;
      <Typography gutterBottom>
        Our schools' motto, "Sowing Seeds of Potential," reflects our belief
        that every child is born with potential, and it is the duty of educators
        to help children find that potential and grow it through our Core
        Values. Our schools' mission is not only to cater to a child's
        educational needs, but also to their physical fitness, artistic
        ingenuity, emotional well-being, and foster their knowledge of God.
        Beyond academic excellence, we aim to mold our students to develop godly
        character and to live as law-abiding citizens.
      </Typography>
      &nbsp;
      <Typography gutterBottom>
        Our schools provide a range of programs and activities, including Music,
        Art and Crafts, Cooking and Gardening, Red Cross, Karate, Scouts &
        Guides, Field Trips, Electronics, and Robotics, all of which encourage
        students to become engaged and compassionate lifelong learners.
      </Typography>
      &nbsp;
      <Typography>
      Our schools' core values are central beliefs that are integral to each member of the school community. They guide us in striving for excellence in all our endeavors, practicing servant leadership, fostering commitment, embracing opportunities, and showing respect to one another.
      </Typography>
      <Typography sx={{pl:5}}  component="div"> <strong> By Excellence we mean that everyone:</strong>
     
      <ol>
    <li>Produces work of the highest quality.</li>
    <li>Sets high standards for self and others.</li>
    <li>Makes the best use of their time, talent, and resources.</li>
    </ol> 
</Typography>
<Typography sx={{pl:5}} component="div"> <strong> By Servant Leadership we mean that everyone:</strong>

      <ol>
    <li>Encourages teachability.</li>
    <li>Commits to teach by example.</li>
    <li>Practices cohesive coaching with humility.</li>
  </ol>  
</Typography>
<Typography sx={{pl:5}} component="div"> <strong> By Commitment we mean that everyone:</strong>

  <ol>
    <li>Is willing to build others and oneself for the good of all.</li>
    <li>Is loyal to the school community by encouraging positivity rather than negativity.</li>
    <li> Is willing to support those who need help and care for those in need.</li>
  </ol>  
</Typography>
<Typography sx={{pl:5}} component="div"> <strong> By Opportunity we mean that everyone:</strong>

     <ol>
    <li>Broadens horizons through participation individually and in teams.</li>
    <li>Volunteer in school programs and situations.</li>
    <li> Considers their strengths and sets goals for improvement.</li>
  </ol>  
     
</Typography>
    </Box>
  );
}
export default AboutContent;

