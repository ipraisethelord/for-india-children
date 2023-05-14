import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
function GoalContent() {
  
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  let boxPadding = 2; 
  if (isMediumScreen) {
   
    boxPadding = 3;   
  }

  if (isLargeScreen) {
   
    boxPadding =4;
   
  }
  return (
    <Box padding={boxPadding}>
      <Typography gutterBottom variant="h4">
        Fund Raising Goals
      </Typography>{" "}
      <Typography gutterBottom variant="h5" sx={{ color: "#964b00"}}>
        Phase One - Completing the construction of Baptist Academy CBSE School
      </Typography>{" "}
      &nbsp;
      <Typography gutterBottom>
        The Baptist Academy CBSE school started with 11 students and 2 teachers
        and has now grown to 185 students (2023 school year) from kindergarten to grade 7, with a
        team of committed and dedicated faculty. We strive to provide a fully
        inclusive CBSE curriculum that empowers and inspires learners with
        powerful knowledge, develops skills, and fosters a love of learning,
        strength of character, and deepens faith and joy.
      </Typography>{" "}
      &nbsp;
      <Typography gutterBottom>
        The Baptist Academy CBSE school has seen tremendous growth in the past
        few years, but currently uses buildings of South India Baptist College &
        Seminary which constrains its ability to further education services to
        the ever-increasing demand of local communities. The current school
        building is only half complete and urgently needs funding to finish the
        work so that the already completed work will not be in ruin, students
        can have their own classrooms, and more needy children can be educated.
        This is our Phase One project and is currently in a dire situation.
      </Typography>{" "}
      &nbsp;
      <Typography gutterBottom>
        We believe that the CBSE school provides high-quality academic
        excellence, and many parents are willing to pay the tuition to send
        their children to the school. Once the school building is complete, the
        school can achieve self-sustainability, eliminating the need for future
        fundraising efforts.
      </Typography>{" "}
      &nbsp;
      <Typography gutterBottom variant="h5" sx={{ color: "#964b00" }}>
        Phase Two - Completing the construction of Baptist Academy Matriculation
        Higher Secondary School
      </Typography>{" "}
      &nbsp;
      <Typography gutterBottom>
        The Baptist Academy Matriculation Higher Secondary School is a
        co-educational, residential, English-Medium school, affiliated with the
        Department of School Education, Tamil Nadu. It has been serving poorer
        and needy families since 1994, with 450 students currently enrolled. The
        school has its own building, but its 3rd floor and 4th floor are not
        finished due to lack of funding. Currently, children are using the first
        and 2nd floor. It needs about a quarter of a million dollars to complete
        the building. Once we complete the CBSE school building project, we will
        start raising funds to complete the Matriculation School.
      </Typography>{" "}
      &nbsp;
      <Typography gutterBottom>
        We believe that every child deserves a quality education and a chance to
        reach their full potential. With your help, we can provide that chance
        to the children of Coimbatore, India. Join us in our mission to fund the
        construction of the Baptist Academy Group of Schools and provide
        exceptional learning environments that equip students with the necessary
        skills to succeed in life.
      </Typography>{" "}
      &nbsp;
    </Box>
  );
}
export default GoalContent;