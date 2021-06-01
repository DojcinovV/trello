import React from "react";
import PureSingleBoard from "./PureSingleBoard";

const SingleBoardComponent = ({ board, lists, id }) => {
  return <PureSingleBoard board={board} lists={lists} id={id} />;
};

export default SingleBoardComponent;
