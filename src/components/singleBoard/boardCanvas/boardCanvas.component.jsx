import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ListComponent from "./List/list.component";
import { ListContainer } from "./boardCanvas.styles";
import ActionButton from "./ActionButton/actionButton.component";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { BOARDS } from "../../../constants";

const BoardCanvasComponent = ({ lists, id }) => {
  const [orderedLists, setOrderedLists] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setOrderedLists(lists);
  }, [lists, setOrderedLists]);

  const reorder = (data, startIndex, endIndex) => {
    const result = Array.from(data);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorder(
      orderedLists,
      result.source.index,
      result.destination.index
    );
    let newpos;
    if (result.destination.index === 0) {
      newpos = orderedLists[result.destination.index].pos - 10;
    } else if (result.destination.index === orderedLists.length - 1) {
      const rndInt = Math.floor(Math.random() * (100000 - 1 + 1) + 1);
      newpos = orderedLists[result.destination.index].pos + rndInt;
    } else {
      newpos =
        result.destination.index > result.source.index
          ? Math.floor(
              Math.random() *
                (orderedLists[result.destination.index + 1].pos -
                  orderedLists[result.destination.index].pos +
                  1)
            ) + orderedLists[result.destination.index].pos
          : Math.floor(
              Math.random() *
                (orderedLists[result.destination.index].pos -
                  orderedLists[result.destination.index - 1].pos +
                  1)
            ) + orderedLists[result.destination.index - 1].pos;
    }

    dispatch({
      type: BOARDS.UPDATE_LIST_POS,
      payload: { pos: newpos, listId: result.draggableId },
    });
    items[result.destination.index].pos = newpos;
    setOrderedLists(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <ListContainer ref={provided.innerRef} {...provided.droppableProps}>
            {orderedLists?.map((list, key) => (
              <ListComponent
                key={list?.id}
                title={list?.name}
                listId={list?.id}
                id={id}
                index={key}
              />
            ))}
            {provided.placeholder}
            <ActionButton list="true" id={id} />
          </ListContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default BoardCanvasComponent;
