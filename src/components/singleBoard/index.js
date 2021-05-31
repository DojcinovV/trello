import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import PureSingleBoard from "./PureSingleBoard";
import { BOARDS } from "../../constants";
const SingleBoardComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: BOARDS.GET_BOARD, payload: "60b3b019f50f08594ce718ed" });
  }, [dispatch]);

  return <PureSingleBoard />;
};

export default withRouter(SingleBoardComponent);
