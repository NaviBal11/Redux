import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const currentTodo = useSelector((state) => state.todoToUpdate);

  useEffect(() => {
    setInput(currentTodo.text || "");
  }, [currentTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (currentTodo.id) {
      dispatch(
        updateTodo({
          id: currentTodo.id,
          text: input,
        })
      );
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        required
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder={currentTodo.id ? input : "Enter a Todo"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {currentTodo.id ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
