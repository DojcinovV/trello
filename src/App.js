import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BodyContainer } from "./App.styles";
import { Routes } from "./routes";
import { BOARDS } from "./constants";

import Header from "./components/header/header.component";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: BOARDS.GET_BOARDS,
    });
    // cleanup
    return () => {};
  }, [dispatch]);
  const app = (
    <>
      <BodyContainer>
        <Header />
        <Routes />
      </BodyContainer>
    </>
  );

  return <>{app}</>;
}

export default App;
