import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
//import { useContext } from 'react'
//import Context from '../reusable/Context'
import BasicTable from "../projects/BasicTable";
import Box from "@mui/material/Box";
export default function CategoryDetail() {
  // const userData = useContext(Context)
  const params = useParams();
  const { id } = params;
  const m = id.split(":")[1];

  return (
    <Box display="flex" bgcolor="lightblue" justifyContent="center">
      <Stack>
        <h1>{m} needs details</h1>

        {<BasicTable tableName={m} />}
      </Stack>
    </Box>
  );
}
