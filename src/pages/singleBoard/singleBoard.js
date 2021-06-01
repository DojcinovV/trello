import React, { useEffect } from "react";
import SingleBoardComponent from "../../components/singleBoard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BOARDS } from "../../constants";

const SingleBoard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: BOARDS.GET_BOARD, payload: id });
    dispatch({ type: BOARDS.GET_LISTS_ON_A_BOARD, payload: id });
    return () => {};
  }, [dispatch, id]);

  const { board } = useSelector((s) => s.boards);
  const { lists } = useSelector((s) => s.boards.board);

  return <SingleBoardComponent board={board} lists={lists} id={id} />;
};

export default SingleBoard;
