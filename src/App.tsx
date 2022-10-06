import React from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import { toDoState } from "recoil/toDo/atom";
import GlobalStyle from "./styles/global-style";
import { theme } from "./styles/theme";
import DragabbleCard from "components/DragabbleCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;

    setToDos((oldToDos) => {
      const copyToDos = [...oldToDos];

      copyToDos.splice(source.index, 1);
      copyToDos.splice(destination?.index, 0, draggableId);
      return copyToDos;
    });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DragDropContext onDragEnd={onDragEnd}>
          <Wrapper>
            <Boards>
              <Droppable droppableId="one">
                {(provided) => (
                  <Board ref={provided.innerRef} {...provided.droppableProps}>
                    {toDos.map((toDo, index) => (
                      <DragabbleCard
                        key={toDo}
                        toDo={toDo}
                        index={index}
                      ></DragabbleCard>
                    ))}
                    {provided.placeholder}
                  </Board>
                )}
              </Droppable>
            </Boards>
          </Wrapper>
        </DragDropContext>
      </ThemeProvider>
    </div>
  );
}

export default App;
