import { useParams } from "react-router-dom"
import { useContext } from 'react'
import Context from '../reusable/Context'
import BasicTable from "../reusable/BasicTable";
import Box from "@mui/material/Box";
export default function CategoryDetail() {
    const userData = useContext(Context)
    const params = useParams();
    const { id } = params;
    const m = id.split(":")[1];
   
    return (
        <Box display="flex" bgcolor="lightblue" justifyContent="center">
        <Box sx={{ width: '100%' }}>
            <h1>Product Details</h1>
            <p>The product ID is {m}</p>          
            {               
                <>                    
                     <BasicTable tableName={m} />
                </>
               
            }
            </Box></Box>
        
    )
}