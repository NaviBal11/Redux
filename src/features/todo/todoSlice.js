import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Clean up"}],
    todoToUpdate:{id:"",text:""}
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },
        setTodoUpdate:(state,action)=>{
            state.todoToUpdate=action.payload
          },

        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
              todoToUpdate.text = text;
            }
            state.todoToUpdate={id:"",text:""}
          },
         
       
    }
})

export const {addTodo,removeTodo,setTodoUpdate,updateTodo} =todoSlice.actions;

export default todoSlice.reducer;

