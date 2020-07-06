import React from "react";
import { useRecoilValue } from "recoil";

import TodoItem from "../TodoItem";
import TodoItemCreator from "../TodoItemCreator";
import { todoListState } from "../../RecoilState";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
