import React from "react";
import { CardContainer } from "./card.styles";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardComponent = ({ text, name }) => {
  return (
    <CardContainer>
      <CardContent>
        <Typography gutterBottom>{text === "" ? name : text}</Typography>
      </CardContent>
    </CardContainer>
  );
};

export default CardComponent;
