import React from "react";
import { useRecoilValue } from "recoil";

import TodoItem from "../TodoItem";
import TodoListStats from "../TodoStats";
import TodoListFilters from "../TodoFilters";
import TodoItemCreator from "../TodoItemCreator";
import { filteredTodoListState } from "../../RecoilState";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
