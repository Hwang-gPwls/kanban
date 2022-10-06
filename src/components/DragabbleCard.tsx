import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  margin-bottom: 5px;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.cardColor};
`;

interface IDDragabbleCardProps {
  toDo: string;
  index: number;
}

const DragabbleCard = ({ toDo, index }: IDDragabbleCardProps) => {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DragabbleCard);
