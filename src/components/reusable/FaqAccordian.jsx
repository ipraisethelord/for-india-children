import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "../../data/faq.json";

export default function FaqAccordion() {
  return (
    <div>
      {data.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ color: "#964b00", fontWeight: "bold" }}>
              {item.id}. {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          
            {item.address1 ? <Typography  sx={{ marginLeft: 5, color: "#ff9800", fontWeight: "bold" }}>{item.address1}</Typography> : null}
            {item.address2 ? <Typography  sx={{ marginLeft: 5, color: "#ff9800", fontWeight: "bold" }}>{item.address2}</Typography> : null}
         
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
