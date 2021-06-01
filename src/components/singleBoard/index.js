import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PureSingleBoard from "./PureSingleBoard";
import { BOARDS } from "../../constants";
const SingleBoardComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: BOARDS.GET_BOARD, payload: id });
  }, [dispatch, id]);

  const { board } = useSelector((s) => s.boards);

  return <PureSingleBoard board={board} />;
};

export default SingleBoardComponent;
