import React from "react";
import Container from "@mui/material/Container";
import ChildrenImageList from "../reusable/ChildrenImageList";
import AlbumChildren from "../reusable/AlbumChildren";
function About() {
    return ( <Container><h1>It's all about them</h1>
    {/* <ChildrenImageList /> */}
    <AlbumChildren />
    </Container> );
}

export default About;