import React from "react";
import ListComponent from "./List/list.component";
import { ListContainer } from "./boardCanvas.styles";
import ActionButton from "./ActionButton/actionButton.component";

const BoardCanvasComponent = ({ lists, id }) => {
  return (
    <ListContainer>
      {lists?.map((list, key) => {
        return (
          <ListComponent
            key={key}
            title={list?.name}
            listId={list?.id}
            id={id}
          />
        );
      })}
      <ActionButton list="true" id={id} />
    </ListContainer>
  );
};

export default BoardCanvasComponent;
